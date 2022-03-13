import { objectType } from "nexus";

export const UserActivityFriendAcceptUser = objectType({
	name: "UserActivityFriendAcceptUser",
	definition: (t) => {
		t.implements("UserActivity");
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
