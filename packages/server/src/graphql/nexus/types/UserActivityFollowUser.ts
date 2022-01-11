import { objectType } from "nexus";

export const UserActivityFollowUser = objectType({
	name: "UserActivityFollowUser",
	definition: (t) => {
		t.implements("UserActivity");
		t.nonNull.field("follow", { type: "Follow" });
		t.nonNull.string("followId");
	}
});
