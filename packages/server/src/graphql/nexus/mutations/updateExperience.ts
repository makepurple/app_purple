import { arg, mutationField, nonNull } from "nexus";
import { PrismaUtils } from "../../../utils";

export const updateExperience = mutationField("updateExperience", {
	type: "Experience",
	args: {
		data: nonNull(arg({ type: "ExperienceUpdateInput" })),
		where: nonNull(arg({ type: "ExperienceWhereUniqueInput" }))
	},
	authorize: async (root, args, { prisma, user }) => {
		if (!user) return false;

		const owner = await prisma.experience
			.findUnique({
				where: PrismaUtils.nonNull(args.where)
			})
			.user();

		if (user.id !== owner?.id) return false;

		return true;
	},
	resolve: async (root, args, { prisma }) => {
		return await prisma.experience.update({
			data: {
				endDate: args.data.endDate,
				highlights: args.data.highlights ?? undefined,
				location: args.data.location,
				organization: args.data.organizationName
					? {
							connectOrCreate: {
								create: {
									name: args.data.organizationName
								},
								where: {
									name: args.data.organizationName
								}
							}
					  }
					: undefined,
				positionName: args.data.positionName,
				startDate: args.data.startDate,
				type: args.data.type
			},
			where: PrismaUtils.nonNull(args.where)
		});
	}
});
