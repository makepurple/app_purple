import { PromiseUtils } from "@makepurple/utils";
import { PostUpdateInput } from "@makepurple/validators";
import { UserActivityType } from "@prisma/client";
import { arg, mutationField, nonNull } from "nexus";
import { octokit } from "../../../services";
import { Logger, NotFoundError, PrismaUtils } from "../../../utils";

export const updatePost = mutationField("updatePost", {
	type: nonNull("UpdatePostPayload"),
	args: {
		data: nonNull(arg({ type: "PostUpdateInput" })),
		where: nonNull(arg({ type: "PostWhereUniqueInput" }))
	},
	authorize: (parent, args, { user }) => {
		return !!user;
	},
	resolve: async (parent, args, { octokit: graphql, prisma }) => {
		const post = await prisma.post.findUnique({
			where: PrismaUtils.nonNull(args.where)
		});

		if (!post) throw new NotFoundError("This post does not exist.");

		const dataInput = PostUpdateInput.validator({
			content: args.data.content ?? undefined,
			description: args.data.description ?? undefined,
			skills: args.data.skills as any,
			thumbnailUrl: args.data.thumbnailUrl
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

		if (!verified) throw new Error("All skills must be from GitHub");

		const activity = await prisma.userActivity.findFirst({
			where: {
				postId: post.id,
				type: UserActivityType.PublishPost
			}
		});

		const record = await prisma.$transaction(async (transaction) => {
			await transaction.post.update({
				where: PrismaUtils.nonNull(args.where),
				data: { skills: { deleteMany: {} } }
			});

			await transaction.organization.createMany({
				data: skillNameOwners.map(({ owner }) => ({ name: owner })),
				skipDuplicates: true
			});

			await transaction.skill.createMany({
				data: skillNameOwners.map(({ name, owner }) => ({ name, owner })),
				skipDuplicates: true
			});

			const newSkills = await transaction.skill.findMany({
				where: { OR: skillNameOwners }
			});

			const skillsToConnect = [...existingSkills, ...newSkills];

			activity &&
				(await transaction.userActivity.update({
					where: { id: activity.id },
					data: {
						skills: {
							set: skillsToConnect.map((skill) => ({
								id: skill.id
							}))
						}
					}
				}));

			if (skillsToConnect.length) {
				await transaction.post.update({
					where: PrismaUtils.nonNull(args.where),
					data: {
						skills: { deleteMany: {} }
					}
				});
			}

			return await transaction.post.update({
				data: {
					content: dataInput.content,
					description: dataInput.description,
					publishedAt: new Date(),
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
					}
				},
				where: PrismaUtils.nonNull(args.where)
			});
		});

		return { record };
	}
});
