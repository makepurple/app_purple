import { NotificationType, UserActivityType } from "@prisma/client";
import { arg, mutationField, nonNull } from "nexus";
import { PrismaUtils } from "../../../utils";

export const acceptFriendship = mutationField("acceptFriendship", {
	type: nonNull("AcceptFriendshipPayload"),
	args: {
		where: nonNull(arg({ type: "UserWhereUniqueInput" }))
	},
	authorize: (parent, args, { user }) => {
		if (!user) return false;

		return true;
	},
	resolve: async (parent, args, { prisma, user }) => {
		if (!user) throw new Error();

		const friender = await prisma.user.findUnique({
			where: PrismaUtils.nonNull(args.where),
			rejectOnNotFound: true
		});

		const pendingFriendship = await prisma.friendship.findUnique({
			where: {
				frienderId_friendingId: {
					// The requester of the friendship
					frienderId: friender.id,
					// User who is accepting the request
					friendingId: user.id
				}
			},
			rejectOnNotFound: true
		});

		const existing = await prisma.friendship
			.findUnique({
				where: {
					frienderId_friendingId: {
						frienderId: user.id,
						friendingId: pendingFriendship.frienderId
					}
				}
			})
			.friending();

		if (existing) return { record: existing };

		const record = await prisma.$transaction(async (transaction) => {
			await transaction.friendship.update({
				where: { id: pendingFriendship.id },
				data: {
					rejectedAt: { set: null }
				}
			});

			return transaction.friendship
				.create({
					data: {
						// Create activity for accepter
						activities: {
							create: {
								type: UserActivityType.FriendAcceptUser,
								user: { connect: { id: user.id } }
							}
						},
						notifications: {
							// Create notification for the requester that friendship accepted
							create: {
								type: NotificationType.FriendshipAccepted,
								user: { connect: { id: pendingFriendship.frienderId } }
							}
						},
						friender: { connect: { id: user.id } },
						friending: { connect: { id: pendingFriendship.frienderId } }
					}
				})
				.friending();
		});

		return { record };
	}
});
