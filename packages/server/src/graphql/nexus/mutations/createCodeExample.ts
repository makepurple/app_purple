import { PromiseUtils, StringUtils } from "@makepurple/utils";
import { CodeExampleCreateInput } from "@makepurple/validators";
import { UserActivityType } from "@prisma/client";
import { arg, mutationField, nonNull } from "nexus";
import { octokit } from "../../../services";
import { PrismaUtils } from "../../../utils";

export const createCodeExample = mutationField("createCodeExample", {
	type: nonNull("CreateCodeExamplePayload"),
	args: {
		data: nonNull(arg({ type: "CodeExampleCreateInput" }))
	},
	authorize: (parent, args, { user }) => {
		return !!user;
	},
	resolve: async (parent, args, { octokit: graphql, prisma, user }) => {
		if (!user) throw new Error();

		const dataInput = CodeExampleCreateInput.validator({
			content: args.data.content,
			description: args.data.description ?? undefined,
			language: args.data.language,
			primarySkill: args.data.primarySkill as any,
			skills: args.data.skills as any,
			title: args.data.title
		});

		const urlSlug = StringUtils.toUrlSlug(dataInput.title);

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

		if (!verified) throw new Error("All skills must be from GitHub");

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

			/**
			 * @description Use the specified primary skill, but otherwise use
			 * the most popular of the listed skill.
			 * @author David Lee
			 * @date March 20, 2022
			 */
			const primarySkill = args.data.primarySkill
				? await transaction.skill.findUnique({
						where: PrismaUtils.nonNull(args.data.primarySkill),
						rejectOnNotFound: true
				  })
				: await transaction.skill.findFirst({
						orderBy: { users: { _count: "desc" } },
						where: { id: { in: skillsToConnect.map((skill) => skill.id) } },
						rejectOnNotFound: true
				  });

			return await transaction.codeExample.create({
				data: {
					activities: {
						create: {
							skills: {
								connect: skillsToConnect.map((skill) => ({
									id: skill.id
								}))
							},
							type: UserActivityType.CreateCodeExample,
							user: {
								connect: { id: user.id }
							}
						}
					},
					author: {
						connect: { id: user.id }
					},
					content: dataInput.content,
					description: dataInput.description,
					language: dataInput.language,
					primarySkill: {
						connect: { id: primarySkill.id }
					},
					skills: {
						createMany: {
							data: skillsToConnect.map((skill) => ({ skillId: skill.id }))
						}
					},
					title: dataInput.title,
					urlSlug
				}
			});
		});

		return { record };
	}
});
