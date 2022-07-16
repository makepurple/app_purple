import { objectType } from "nexus";

export const NotificationFriendshipAccepted = objectType({
	name: "NotificationFriendshipAccepted",
	definition: (t) => {
		t.implements("Notification");
		t.nonNull.field("friendship", {
			type: "Friendship",
			resolve: async (parent, args, { prisma }) => {
				return await prisma.friendship.findUniqueOrThrow({
					where: { id: parent.friendshipId }
				});
			}
		});
		t.nonNull.string("friendshipId");
	}
});
