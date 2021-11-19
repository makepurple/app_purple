import { PrismaUtils } from "@/server/utils";
import { arg, mutationField, nonNull } from "nexus";

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
				...args.data,
				highlights: args.data.highlights ?? undefined,
				organizationName: args.data.organizationName ?? undefined
			},
			where: PrismaUtils.nonNull(args.where)
		});
	}
});
