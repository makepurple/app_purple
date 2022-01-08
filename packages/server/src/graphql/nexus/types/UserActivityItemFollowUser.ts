import { objectType } from "nexus";

export const UserActivityItemFollowUser = objectType({
	name: "UserActivityItemFollowUser",
	definition: (t) => {
		t.implements("UserActivity");
		t.nonNull.field("follow", { type: "Follow" });
		t.nonNull.string("followId");
	}
});
