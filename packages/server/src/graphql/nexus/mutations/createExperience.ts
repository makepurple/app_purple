import { arg, mutationField, nonNull } from "nexus";

export const createExperience = mutationField("createExperience", {
	type: nonNull("Experience"),
	args: {
		data: nonNull(arg({ type: "ExperienceCreateInput" }))
	},
	authorize: (root, args, { user }) => {
		return !!user;
	},
	resolve: async (root, args, { prisma, user }) => {
		if (!user) throw new Error();

		return await prisma.experience.create({
			data: {
				endDate: args.data.endDate,
				highlights: args.data.highlights ?? [],
				location: args.data.location,
				organization: {
					connectOrCreate: {
						create: {
							name: args.data.organizationName
						},
						where: {
							name: args.data.organizationName
						}
					}
				},
				positionName: args.data.positionName,
				startDate: args.data.startDate,
				type: args.data.type,
				user: {
					connect: {
						id: user.id
					}
				}
			}
		});
	}
});
