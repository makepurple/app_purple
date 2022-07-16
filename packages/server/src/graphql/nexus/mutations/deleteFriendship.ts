import { UserActivityType } from "@prisma/client";
import { arg, mutationField, nonNull } from "nexus";
import { PrismaUtils } from "../../../utils";

export const deleteFriendship = mutationField("deleteFriendship", {
	type: nonNull("DeleteFriendshipPayload"),
	args: {
		where: nonNull(arg({ type: "UserWhereUniqueInput" }))
	},
	authorize: (parent, args, { user }) => {
		return !!user;
	},
	resolve: async (parent, args, { prisma, user }) => {
		if (!user) throw new Error();

		const friend = await prisma.user.findUniqueOrThrow({
			where: PrismaUtils.nonNull(args.where)
		});

		const record = await prisma.$transaction(async (transaction) => {
			const deleted = await transaction.friendship
				.delete({
					where: {
						frienderId_friendingId: {
							frienderId: user.id,
							friendingId: friend.id
						}
					}
				})
				.friending();

			await transaction.friendship.update({
				where: {
					frienderId_friendingId: {
						frienderId: friend.id,
						friendingId: user.id
					}
				},
				data: {
					activities: {
						deleteMany: {
							type: UserActivityType.FriendAcceptUser
						}
					},
					rejectedAt: new Date()
				}
			});

			return deleted;
		});

		return { record };
	}
});
