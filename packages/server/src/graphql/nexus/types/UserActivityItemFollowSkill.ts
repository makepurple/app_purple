import { objectType } from "nexus";

export const UserActivityItemFollowSkill = objectType({
	name: "UserActivityItemFollowSkill",
	definition: (t) => {
		t.implements("UserActivity");
		t.nonNull.field("follow", { type: "Follow" });
		t.nonNull.string("followId");
	}
});
