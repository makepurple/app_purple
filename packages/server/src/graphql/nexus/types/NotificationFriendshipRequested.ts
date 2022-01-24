import { objectType } from "nexus";

export const NotificationFriendshipRequested = objectType({
	name: "NotificationFriendshipRequested",
	definition: (t) => {
		t.implements("Notification");
		t.nonNull.field("friendship", { type: "Friendship" });
		t.nonNull.string("friendshipId");
	}
});
