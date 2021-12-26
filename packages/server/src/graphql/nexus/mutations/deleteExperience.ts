import { oneLine } from "common-tags";
import { arg, mutationField, nonNull } from "nexus";
import { PrismaUtils } from "../../../utils";

export const deleteExperience = mutationField("deleteExperience", {
	type: nonNull("DeleteExperiencePayload"),
	description: oneLine`
		Users can delete their own experiences.
	`,
	args: {
		where: nonNull(arg({ type: "ExperienceWhereUniqueInput" }))
	},
	authorize: async (parent, args, { prisma, user }) => {
		if (!user) return false;

		const owner = await prisma.experience
			.findUnique({
				where: PrismaUtils.nonNull(args.where)
			})
			.user();

		if (user.id !== owner?.id) return false;

		return true;
	},
	resolve: async (parent, args, { prisma }) => {
		const record = await prisma.experience.delete({
			where: PrismaUtils.nonNull(args.where)
		});

		return { record };
	}
});
