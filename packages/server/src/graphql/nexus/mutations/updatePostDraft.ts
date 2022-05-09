import { PromiseUtils } from "@makepurple/utils";
import { PostDraftUpdateInput } from "@makepurple/validators";
import { oneLine } from "common-tags";
import { arg, mutationField, nonNull } from "nexus";
import { octokit } from "../../../services";
import { Logger, PrismaUtils } from "../../../utils";

export const updatePostDraft = mutationField("updatePostDraft", {
	type: nonNull("UpdatePostDraftPayload"),
	args: {
		data: nonNull(arg({ type: "PostDraftUpdateInput" })),
		where: nonNull(arg({ type: "PostWhereUniqueInput" }))
	},
	authorize: async (parent, args, { prisma, user }) => {
		if (!user) return false;

		const post = await prisma.post.findUnique({
			where: PrismaUtils.nonNull(args.where)
		});

		if (post?.publishedAt) return false;

		return true;
	},
	resolve: async (parent, args, { graphcdn, octokit: graphql, prisma, user }) => {
		if (!user) throw new Error();

		const post = await prisma.post.findUnique({
			where: PrismaUtils.nonNull(args.where)
		});

		if (!post) {
			return {
				errors: [
					{
						__typename: "PostNotFoundError",
						message: oneLine`
							This post does not exist
						`
					}
				]
			};
		}

		const dataInput = PostDraftUpdateInput.validator({
			content: args.data.content ?? undefined,
			description: args.data.description ?? undefined,
			skills: args.data.skills as any,
			thumbnailUrl: args.data.thumbnailUrl,
			title: args.data.title ?? undefined
		});

		const skillIds = (args.data.skills ?? [])
			.filter((skill) => !!skill.id)
			.map((skill) => skill.id) as string[];

		const skillNameOwners = (args.data.skills ?? [])
			.filter((skill) => !!skill.name_owner)
			.map((skill) => skill.name_owner) as { name: string; owner: string }[];

		const existingSkills = await prisma.skill.findMany({
			where: { OR: [{ id: { in: skillIds } }, ...skillNameOwners] }
		});

		const toCreateSkills = skillNameOwners.filter(
			({ name, owner }) =>
				!existingSkills.some((skill) => skill.name === name && skill.owner === owner)
		);

		const verifySkill = async (name: string, owner: string): Promise<boolean> => {
			const verified = await graphql`
				query VerifySkill($name: String!, $owner: String!) {
					repository(followRenames: false, name: $name, owner: $owner) {
						id
					}
				}
			`
				.cast<octokit.VerifySkillQuery, octokit.VerifySkillQueryVariables>({
					name,
					owner
				})
				.then((result) => !!result.repository)
				.catch(() => false);

			return verified;
		};

		if (toCreateSkills.length) Logger.info("Verifying skills:", toCreateSkills);

		const verified = await PromiseUtils.every(
			toCreateSkills,
			{ concurrency: 2 },
			async (skill) => await verifySkill(skill.name, skill.owner)
		);

		if (!verified) {
			return {
				errors: [
					{
						__typename: "InvalidSkillError",
						message: oneLine`
							All skills must be from GitHub
						`
					}
				]
			};
		}

		const record = await prisma.$transaction(async (transaction) => {
			await transaction.post.update({
				where: PrismaUtils.nonNull(args.where),
				data: { skills: { deleteMany: {} } }
			});

			await transaction.organization.createMany({
				data: toCreateSkills.map(({ owner }) => ({ name: owner })),
				skipDuplicates: true
			});

			await transaction.skill.createMany({
				data: toCreateSkills.map(({ name, owner }) => ({ name, owner })),
				skipDuplicates: true
			});

			const newSkills = await transaction.skill.findMany({
				where: { OR: toCreateSkills }
			});

			const skillsToConnect = [...existingSkills, ...newSkills];

			return await transaction.post.update({
				data: {
					content: dataInput.content,
					description: dataInput.description,
					skills: {
						connectOrCreate: skillsToConnect.map((skill) => ({
							where: {
								skillId_postId: {
									skillId: skill.id,
									postId: post.id
								}
							},
							create: {
								skillId: skill.id
							}
						}))
					},
					title: dataInput.title
				},
				where: PrismaUtils.nonNull(args.where)
			});
		});

		await graphcdn.purge`
			mutation($draftId: ID!, $userId: ID!) {
				purgePost(id: $draftId)
				purgeQuery_postDraft
				purgeUser(id: $userId)
			}
		`({
			draftId: record.id,
			userId: user.id
		});

		return { record };
	}
});
