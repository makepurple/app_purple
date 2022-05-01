import { objectType } from "nexus";

export const UpdateDesiredSkillsPayload = objectType({
	name: "UpdateDesiredSkillsPayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.list.nonNull.field("errors", { type: "UpdateDesiredSkillsError" });
		t.field("record", { type: "User" });
	}
});
