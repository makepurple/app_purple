import { objectType } from "nexus";

export const FollowSkillPayload = objectType({
	name: "FollowSkillPayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.nonNull.field("record", { type: "Follow" });
	}
});
