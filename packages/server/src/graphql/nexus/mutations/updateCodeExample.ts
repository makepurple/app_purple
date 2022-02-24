import { PromiseUtils, StringUtils } from "@makepurple/utils";
import { CodeExampleUpdateInput } from "@makepurple/validators";
import { UserActivityType } from "@prisma/client";
import { arg, mutationField, nonNull } from "nexus";
import { octokit } from "../../../services";
import { NotFoundError, PrismaUtils } from "../../../utils";

export const updateCodeExample = mutationField("updateCodeExample", {
	type: nonNull("UpdateCodeExamplePayload"),
	args: {
		data: nonNull(arg({ type: "CodeExampleUpdateInput" })),
		where: nonNull(arg({ type: "CodeExampleWhereUniqueInput" }))
	},
	authorize: (parent, args, { user }) => {
		return !!user;
	},
	resolve: async (parent, args, { octokit: graphql, prisma, user }) => {
		if (!user) throw new Error();

		const codeExample = await prisma.codeExample.findUnique({
			where: PrismaUtils.nonNull(args.where)
		});

		if (!codeExample) throw new NotFoundError("This code-example does not exist");

		const dataInput = CodeExampleUpdateInput.validator({
			content: args.data.content,
			description: args.data.description ?? undefined,
			language: args.data.language,
			skills: args.data.skills,
			title: args.data.title
		});

		const urlSlug =
			typeof dataInput.title === "string"
				? StringUtils.toUrlSlug(dataInput.title)
				: undefined;

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

		const activity = await prisma.userActivity.findFirst({
			where: {
				codeExample: { id: { equals: codeExample.id } },
				type: UserActivityType.CreateCodeExample
			}
		});

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

			return await transaction.codeExample.update({
				data: {
					content: dataInput.content,
					description: dataInput.description,
					language: dataInput.language,
					skills: {
						connectOrCreate: skillsToConnect.map((skill) => ({
							where: {
								skillId_codeExampleId: {
									skillId: skill.id,
									codeExampleId: codeExample.id
								}
							},
							create: {
								skillId: skill.id,
								codeExampleId: codeExample.id
							}
						}))
					},
					title: dataInput.title,
					urlSlug
				},
				where: PrismaUtils.nonNull(args.where)
			});
		});

		return { record };
	}
});
