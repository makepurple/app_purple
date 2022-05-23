import { PromiseUtils } from "@makepurple/utils";
import { CodeExampleUpdateInput } from "@makepurple/validators";
import { UserActivityType } from "@prisma/client";
import { oneLine } from "common-tags";
import { arg, mutationField, nonNull } from "nexus";
import { octokit } from "../../../services";
import { PrismaUtils } from "../../../utils";

export const updateCodeExample = mutationField("updateCodeExample", {
	type: nonNull("UpdateCodeExamplePayload"),
	args: {
		data: nonNull(arg({ type: "CodeExampleUpdateInput" })),
		where: nonNull(arg({ type: "CodeExampleWhereUniqueInput" }))
	},
	authorize: (parent, args, { user }) => {
		return !!user;
	},
	resolve: async (parent, args, { octokit: graphql, prisma, res, user }) => {
		if (!user) throw new Error();

		const codeExample = await prisma.codeExample.findUnique({
			where: PrismaUtils.nonNull(args.where)
		});

		if (!codeExample) {
			return {
				errors: [
					{
						__typename: "CodeExampleNotFoundError",
						message: oneLine`
							This snippet does not exist
						`
					}
				]
			};
		}

		const dataInput = CodeExampleUpdateInput.validator({
			content: args.data.content ?? undefined,
			description: args.data.description ?? undefined,
			language: args.data.language ?? undefined,
			skills: (args.data.skills ?? undefined) as any
		});

		const originalSkills = args.data.skills ?? [];
		const skills = args.data.primarySkill
			? [...originalSkills, args.data.primarySkill]
			: originalSkills;

		const skillIds = skills.filter((skill) => !!skill.id).map((skill) => skill.id) as string[];

		const skillNameOwners = skills
			.filter((skill) => !!skill.name_owner)
			.map((skill) => skill.name_owner) as { name: string; owner: string }[];

		const existingSkills = await prisma.skill.findMany({
			where: {
				OR: [{ id: { in: skillIds } }, ...skillNameOwners]
			}
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

		const activity = await prisma.userActivity.findFirst({
			where: {
				codeExample: { id: { equals: codeExample.id } },
				type: UserActivityType.CreateCodeExample
			}
		});

		const record = await prisma.$transaction(async (transaction) => {
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

			const primarySkill = args.data.primarySkill
				? await transaction.skill.findUnique({
						where: PrismaUtils.nonNull(args.data.primarySkill),
						rejectOnNotFound: true
				  })
				: skillsToConnect.length
				? await transaction.skill.findFirst({
						orderBy: { users: { _count: "desc" } },
						where: { id: { in: skillsToConnect.map((skill) => skill.id) } },
						rejectOnNotFound: true
				  })
				: undefined;

			if (activity) {
				await transaction.userActivity.update({
					where: { id: activity.id },
					data: {
						skills: {
							set: skillsToConnect.map((skill) => ({
								id: skill.id
							}))
						}
					}
				});
			}

			if (skillsToConnect.length) {
				await transaction.codeExample.update({
					where: PrismaUtils.nonNull(args.where),
					data: {
						skills: { deleteMany: {} }
					}
				});
			}

			return await transaction.codeExample.update({
				data: {
					content: dataInput.content,
					description: dataInput.description,
					language: dataInput.language,
					primarySkill: {
						connect: { id: primarySkill?.id }
					},
					skills: {
						connectOrCreate: skillsToConnect.map((skill) => ({
							where: {
								skillId_codeExampleId: {
									skillId: skill.id,
									codeExampleId: codeExample.id
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

		await res.unstable_revalidate(`/${user.name}`).catch(() => null);

		return { record };
	}
});
