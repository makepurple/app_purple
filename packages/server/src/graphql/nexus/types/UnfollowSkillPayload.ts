import { objectType } from "nexus";

export const UnfollowSkillPayload = objectType({
	name: "UnfollowSkillPayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.nonNull.field("record", { type: "Follow" });
	}
});
