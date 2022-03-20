import { objectType } from "nexus";

export const UpdateDesiredSkillsPayload = objectType({
	name: "UpdateDesiredSkillsPayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.field("record", { type: "User" });
	}
});
