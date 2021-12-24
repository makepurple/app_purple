import { ExperienceCreateInput } from "@makepurple/validators";
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

		const dataInput = ExperienceCreateInput.validator({
			endDate: args.data.endDate,
			highlights: args.data.highlights ?? [],
			location: args.data.location,
			organizationName: args.data.organizationName,
			positionName: args.data.positionName,
			startDate: args.data.startDate,
			type: args.data.type
		});

		return await prisma.experience.create({
			data: {
				endDate: dataInput.endDate as Maybe<Date>,
				highlights: (dataInput.highlights ?? []) as string[],
				location: dataInput.location,
				organization: {
					connectOrCreate: {
						create: {
							name: dataInput.organizationName
						},
						where: {
							name: dataInput.organizationName
						}
					}
				},
				positionName: dataInput.positionName,
				startDate: dataInput.startDate as Date,
				type: dataInput.type,
				user: {
					connect: {
						id: user.id
					}
				}
			}
		});
	}
});
