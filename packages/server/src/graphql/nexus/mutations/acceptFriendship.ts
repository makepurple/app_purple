import { UserActivityType } from "@prisma/client";
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

		if (existing && !existing.rejected) return { record: existing };

		const record = await prisma.friendship.upsert({
			where: {
				frienderId_friendingId: {
					frienderId: user.id,
					friendingId: pendingFriendship.frienderId
				}
			},
			create: {
				activities: {
					create: {
						type: UserActivityType.FriendAcceptUser,
						user: { connect: { id: user.id } }
					}
				},
				friender: { connect: { id: user.id } },
				friending: { connect: { id: pendingFriendship.frienderId } }
			},
			update: {
				activities: {
					create: {
						type: UserActivityType.FriendAcceptUser,
						user: { connect: { id: user.id } }
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
