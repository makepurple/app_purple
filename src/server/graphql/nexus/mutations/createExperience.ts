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
				...args.data,
				highlights: args.data.highlights ?? [],
				user: {
					connect: {
						id: user.id
					}
				}
			}
		});
	}
});
