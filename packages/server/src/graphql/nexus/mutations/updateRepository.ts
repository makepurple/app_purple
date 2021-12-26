import { PromiseUtils } from "@makepurple/utils";
import { arg, mutationField, nonNull } from "nexus";
import { PrismaUtils } from "../../../utils";

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
	resolve: async (parent, args, { prisma, user }) => {
		if (!user) throw new Error();

		const repository = await prisma.repository.findUnique({
			where: PrismaUtils.nonNull(args.where)
		});

		if (!repository) throw new Error("Repository could not be found");

		const skills = args.data.skills ?? [];

		const skillIds = skills.filter((skill) => !!skill.id).map((skill) => skill.id) as number[];

		const skillNameOwners = skills
			.filter((skill) => !!skill.name_owner)
			.map((skill) => skill.name_owner) as { name: string; owner: string }[];

		const skillsById = await prisma.skill.findMany({
			where: { id: { in: skillIds } }
		});

		const record = await prisma.$transaction(async (transaction) => {
			await transaction.repository.update({
				data: { skills: { deleteMany: {} } },
				where: PrismaUtils.nonNull(args.where)
			});

			const skillsByNameOwner = await PromiseUtils.map(
				skillNameOwners,
				{ concurrency: 2 },
				async ({ name, owner }) => {
					return await transaction.skill.upsert({
						where: { name_owner: { name, owner } },
						create: { name, owner },
						update: {}
					});
				}
			);

			const skillsToConnect = [...skillsById, ...skillsByNameOwner];

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
								skillId: skill.id,
								repositoryId: repository.id
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
