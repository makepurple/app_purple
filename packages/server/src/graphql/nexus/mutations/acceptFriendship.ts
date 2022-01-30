import { NotificationType, UserActivityType } from "@prisma/client";
import { stripIndents } from "common-tags";
import { arg, mutationField, nonNull } from "nexus";
import { PrismaUtils } from "../../../utils";

export const acceptFriendship = mutationField("acceptFriendship", {
	type: nonNull("AcceptFriendshipPayload"),
	args: {
		where: nonNull(
			arg({
				type: "FriendshipWhereUniqueInput",
				description: stripIndents`
					Find friendship from requester -> viewer
				`
			})
		)
	},
	authorize: async (parent, args, { prisma, user }) => {
		if (!user) return false;

		const friendingUser = await prisma.friendship
			.findUnique({
				where: PrismaUtils.nonNull(args.where)
			})
			.friending();

		if (friendingUser?.id !== user.id) return false;

		return true;
	},
	resolve: async (parent, args, { prisma, user }) => {
		if (!user) throw new Error();

		const pendingFriendship = await prisma.friendship.update({
			where: PrismaUtils.nonNull(args.where),
			data: {
				rejected: false
			}
		});

		if (!pendingFriendship) throw new Error();

		const existing = await prisma.friendship.findUnique({
			where: {
				frienderId_friendingId: {
					frienderId: user.id,
					friendingId: pendingFriendship.frienderId
				}
			}
		});

		if (!existing) {
			const record = await prisma.friendship.create({
				data: {
					activities: {
						create: {
							type: UserActivityType.FriendAcceptUser,
							user: { connect: { id: user.id } }
						}
					},
					notifications: {
						create: {
							type: NotificationType.FriendshipAccepted,
							user: { connect: { id: pendingFriendship.frienderId } }
						}
					},
					friender: { connect: { id: user.id } },
					friending: { connect: { id: pendingFriendship.frienderId } }
				}
			});

			return { record };
		}

		if (!existing.rejected) return { record: existing };

		const activity = await prisma.userActivity.findFirst({
			where: {
				friendship: { id: { equals: existing.id } },
				type: UserActivityType.FriendAcceptUser,
				user: { id: { equals: user.id } }
			}
		});

		const notification = await prisma.notification.findFirst({
			where: {
				friendship: { id: { equals: existing.id } },
				type: NotificationType.FriendshipAccepted,
				user: { id: { equals: existing.friendingId } }
			}
		});

		const record = await prisma.friendship.update({
			where: { id: existing.id },
			data: {
				activities: activity
					? {
							update: {
								where: { id: activity.id },
								data: { updatedAt: new Date() }
							}
					  }
					: {
							create: {
								type: UserActivityType.FriendAcceptUser,
								user: { connect: { id: user.id } }
							}
					  },
				notifications: notification
					? {
							update: {
								where: { id: notification.id },
								data: { updatedAt: new Date() }
							}
					  }
					: {
							create: {
								type: NotificationType.FriendshipAccepted,
								user: { connect: { id: existing.friendingId } }
							}
					  },
				friender: { connect: { id: user.id } },
				friending: { connect: { id: pendingFriendship.frienderId } },
				rejected: false
			}
		});

		return { record };
	}
});
