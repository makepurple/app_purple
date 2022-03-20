import { objectType } from "nexus";

export const UnfollowSkillPayload = objectType({
	name: "UnfollowSkillPayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.field("record", { type: "Follow" });
	}
});
