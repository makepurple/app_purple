import { objectType } from "nexus";

export const NotificationFriendshipAccepted = objectType({
	name: "NotificationFriendshipAccepted",
	definition: (t) => {
		t.implements("Notification");
		t.nonNull.field("friendship", {
			type: "Friendship",
			resolve: async (parent, args, { prisma }) => {
				return await prisma.friendship.findUnique({
					where: { id: parent.friendshipId },
					rejectOnNotFound: true
				});
			}
		});
		t.nonNull.string("friendshipId");
	}
});
