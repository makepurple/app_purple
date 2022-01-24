import { NotificationType } from "@prisma/client";
import { arg, mutationField, nonNull } from "nexus";
import { NotFoundError, PrismaUtils } from "../../../utils";

export const requestFriendship = mutationField("requestFriendship", {
	type: nonNull("RequestFriendshipPayload"),
	args: {
		where: nonNull(arg({ type: "UserWhereUniqueInput" }))
	},
	authorize: (parent, args, { user }) => {
		return !!user;
	},
	resolve: async (parent, args, { prisma, user }) => {
		if (!user) throw new Error();

		const toFriend = await prisma.user.findUnique({
			where: PrismaUtils.nonNull(args.where),
			select: { id: true }
		});

		if (!toFriend) throw new NotFoundError("User could not be found");

		const record = await prisma.friendship.upsert({
			where: {
				frienderId_friendingId: {
					frienderId: user.id,
					friendingId: toFriend.id
				}
			},
			create: {
				friender: { connect: { id: user.id } },
				friending: { connect: PrismaUtils.nonNull(args.where) },
				notifications: {
					create: {
						type: NotificationType.FriendshipRequested,
						user: { connect: { id: toFriend.id } }
					}
				}
			},
			update: {}
		});

		return { record };
	}
});
