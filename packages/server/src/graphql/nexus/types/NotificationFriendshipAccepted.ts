import { objectType } from "nexus";

export const NotificationFriendshipAccepted = objectType({
	name: "NotificationFriendshipAccepted",
	definition: (t) => {
		t.implements("Notification");
		t.nonNull.field("friendship", { type: "Friendship" });
		t.nonNull.string("friendshipId");
	}
});
