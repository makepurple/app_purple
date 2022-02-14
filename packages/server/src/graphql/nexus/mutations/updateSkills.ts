import { PromiseUtils } from "@makepurple/utils";
import { arg, mutationField, nonNull } from "nexus";
import { octokit } from "../../../services";

export const updateSkills = mutationField("updateSkills", {
	type: nonNull("UpdateSkillsPayload"),
	args: {
		data: nonNull(arg({ type: "UpdateSkillsInput" }))
	},
	authorize: (parent, args, { user }) => {
		return !!user;
	},
	resolve: async (parent, args, { octokit: graphql, prisma, user }) => {
		if (!user) throw new Error();

		const skillIds = args.data.skills
			.filter((skill) => !!skill.id)
			.map((skill) => skill.id) as string[];

		const skillNameOwners = args.data.skills
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

		const verified = await PromiseUtils.some(
			toCreateSkills,
			{ concurrency: 2 },
			async (skill) => await verifySkill(skill.name, skill.owner)
		);

		if (!verified) throw new Error("All skills must be from GitHub");

		const record = await prisma.$transaction(async (transaction) => {
			await transaction.user.update({
				where: { id: user.id },
				data: { skills: { deleteMany: {} } }
			});

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

			return await transaction.user.update({
				where: { id: user.id },
				data: {
					skills: {
						connectOrCreate: skillsToConnect.map((skill) => ({
							where: {
								skillId_userId: {
									skillId: skill.id,
									userId: user.id
								}
							},
							create: {
								skillId: skill.id,
								userId: user.id
							}
						}))
					}
				}
			});
		});

		return { record };
	}
});
