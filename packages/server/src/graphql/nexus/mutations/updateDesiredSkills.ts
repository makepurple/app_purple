import { PromiseUtils } from "@makepurple/utils";
import { arg, mutationField, nonNull } from "nexus";

export const updateDesiredSkills = mutationField("updateDesiredSkills", {
	type: "User",
	args: {
		data: nonNull(arg({ type: "UpdateDesiredSkillsInput" }))
	},
	authorize: (parent, args, { user }) => {
		return !!user;
	},
	resolve: async (parent, args, { prisma, user }) => {
		if (!user) throw new Error();

		const skillIds = args.data.skills
			.filter((skillId) => !!skillId)
			.map((skill) => skill.id) as number[];

		const skillNameOwners = args.data.skills
			.filter((skill) => !!skill.name_owner)
			.map((skill) => skill.name_owner) as { name: string; owner: string }[];

		const skillsById = await prisma.skill.findMany({
			where: { id: { in: skillIds } }
		});

		const updatedUser = await prisma.$transaction(async (transaction) => {
			await transaction.user.update({
				where: { id: user.id },
				data: { desiredSkills: { deleteMany: {} } }
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
								skillId: skill.id,
								userId: user.id
							}
						}))
					}
				}
			});
		});

		return updatedUser;
	}
});
