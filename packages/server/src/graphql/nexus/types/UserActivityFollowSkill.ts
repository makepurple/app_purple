import { objectType } from "nexus";

export const UserActivityFollowSkill = objectType({
	name: "UserActivityFollowSkill",
	definition: (t) => {
		t.implements("UserActivity");
		t.nonNull.field("follow", { type: "Follow" });
		t.nonNull.string("followId");
	}
});
