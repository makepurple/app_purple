import { PromiseUtils } from "@makepurple/utils";
import { oneLine } from "common-tags";
import { arg, mutationField, nonNull } from "nexus";
import { octokit } from "../../../services";

export const updateDesiredSkills = mutationField("updateDesiredSkills", {
	type: nonNull("UpdateDesiredSkillsPayload"),
	args: {
		data: nonNull(arg({ type: "UpdateDesiredSkillsInput" }))
	},
	authorize: (parent, args, { user }) => {
		return !!user;
	},
	resolve: async (parent, args, { graphcdn, octokit: graphql, prisma, res, user }) => {
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
			await transaction.user.update({
				where: { id: user.id },
				data: { desiredSkills: { deleteMany: {} } }
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

			return await transaction.user.update({
				where: { id: user.id },
				data: {
					desiredSkills: {
						connectOrCreate: skillsToConnect.map((skill) => ({
							where: {
								skillId_userId: {
									skillId: skill.id,
									userId: user.id
								}
							},
							create: {
								skillId: skill.id
							}
						}))
					}
				}
			});
		});

		await graphcdn.purge`
			mutation($userId: ID!) {
				purgeUser(id: $userId)
			}
		`({
			userId: user.id
		});

		await res.revalidate(`/${user.name}`).catch(() => null);

		return { record };
	}
});
