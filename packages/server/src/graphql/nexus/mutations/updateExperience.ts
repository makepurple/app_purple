import { ExperienceUpdateInput } from "@makepurple/validators";
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
		const dataInput = ExperienceUpdateInput.validator({
			endDate: args.data.endDate,
			highlights: args.data.highlights,
			location: args.data.location,
			organizationName: args.data.organizationName ?? undefined,
			positionName: args.data.positionName ?? undefined,
			startDate: args.data.startDate ?? undefined,
			type: args.data.type
		});

		return await prisma.experience.update({
			data: {
				endDate: dataInput.endDate as Maybe<Date>,
				highlights: ((dataInput.highlights ?? []) as string[]) ?? undefined,
				location: dataInput.location,
				organization: dataInput.organizationName
					? {
							connectOrCreate: {
								create: {
									name: dataInput.organizationName
								},
								where: {
									name: dataInput.organizationName
								}
							}
					  }
					: undefined,
				positionName: dataInput.positionName ?? undefined,
				startDate: (dataInput.startDate as Maybe<Date>) ?? undefined,
				type: dataInput.type
			},
			where: PrismaUtils.nonNull(args.where)
		});
	}
});
