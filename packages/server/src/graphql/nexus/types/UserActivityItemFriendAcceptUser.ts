import { objectType } from "nexus";

export const UserActivityItemFriendAcceptUser = objectType({
	name: "UserActivityItemFriendAcceptUser",
	definition: (t) => {
		t.implements("UserActivity");
		t.nonNull.field("friendship", { type: "Friendship" });
		t.nonNull.string("friendshipId");
	}
});
