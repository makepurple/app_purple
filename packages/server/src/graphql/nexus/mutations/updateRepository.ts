import { PromiseUtils } from "@makepurple/utils";
import { arg, mutationField, nonNull } from "nexus";
import { octokit } from "../../../services";
import { Logger, PrismaUtils } from "../../../utils";

export const updateRepository = mutationField("updateRepository", {
	type: nonNull("UpdateRepositoryPayload"),
	args: {
		data: nonNull(arg({ type: "RepositoryUpdateInput" })),
		where: nonNull(arg({ type: "RepositoryWhereUniqueInput" }))
	},
	authorize: async (root, args, { prisma, user }) => {
		if (!user) return false;

		const owner = await prisma.repository
			.findUnique({ where: PrismaUtils.nonNull(args.where) })
			.user({ select: { id: true } });

		if (user.id !== owner?.id) return false;

		return true;
	},
	resolve: async (parent, args, { octokit: graphql, prisma, user }) => {
		if (!user) throw new Error();

		const repository = await prisma.repository.findUnique({
			where: PrismaUtils.nonNull(args.where)
		});

		if (!repository) throw new Error("Repository could not be found");

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

		const record = await prisma.$transaction(async (transaction) => {
			await transaction.repository.update({
				data: { skills: { deleteMany: {} } },
				where: PrismaUtils.nonNull(args.where)
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

			return await transaction.repository.update({
				data: {
					skills: {
						connectOrCreate: skillsToConnect.map((skill) => ({
							where: {
								skillId_repositoryId: {
									skillId: skill.id,
									repositoryId: repository.id
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
