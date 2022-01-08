import { UserActivityType } from "@prisma/client";
import { arg, mutationField, nonNull } from "nexus";
import { PrismaUtils } from "../../../utils";

export const followUser = mutationField("followUser", {
	type: nonNull("FollowUserPayload"),
	args: {
		where: nonNull(arg({ type: "UserWhereUniqueInput" }))
	},
	authorize: (parent, args, { user }) => {
		return !!user;
	},
	resolve: async (parent, args, { prisma, user }) => {
		if (!user) throw new Error();

		const record = await prisma.follow.create({
			data: {
				activities: {
					create: {
						type: UserActivityType.FollowUser,
						user: { connect: { id: user.id } }
					}
				},
				follower: { connect: { id: user.id } },
				following: {
					connect: PrismaUtils.nonNull(args.where)
				}
			}
		});

		return { record };
	}
});
