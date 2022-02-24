import { PromiseUtils } from "@makepurple/utils";
import { CodeExampleCreateInput } from "@makepurple/validators";
import { UserActivityType } from "@prisma/client";
import { arg, mutationField, nonNull } from "nexus";
import { octokit } from "../../../services";

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
			skills: args.data.skills as any,
			title: args.data.title
		});

		const skillIds = (args.data.skills ?? [])
			.filter((skill) => !!skill.id)
			.map((skill) => skill.id) as string[];

		const skillNameOwners = (args.data.skills ?? [])
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
			const newSkills = await PromiseUtils.map(
				toCreateSkills,
				{ concurrency: 2 },
				async ({ name, owner }) => {
					return await transaction.skill.create({
						data: {
							name,
							organization: {
								connectOrCreate: {
									where: { name: owner },
									create: { name: owner }
								}
							}
						}
					});
				}
			);

			const skillsToConnect = [...existingSkills, ...newSkills];

			return await transaction.codeExample.create({
				data: {
					activities: {
						create: {
							type: UserActivityType.CreateCodeExample,
							user: {
								connect: {
									id: user.id
								}
							}
						}
					},
					author: {
						connect: {
							id: user.id
						}
					},
					content: dataInput.content,
					description: dataInput.description,
					language: dataInput.language,
					skills: {
						createMany: {
							data: skillsToConnect.map((skill) => ({ skillId: skill.id }))
						}
					},
					title: dataInput.title
				}
			});
		});

		return { record };
	}
});
