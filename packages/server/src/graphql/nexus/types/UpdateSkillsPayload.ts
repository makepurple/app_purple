import { objectType } from "nexus";

export const UpdateSkillsPayload = objectType({
	name: "UpdateSkillsPayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.field("record", { type: "User" });
	}
});
