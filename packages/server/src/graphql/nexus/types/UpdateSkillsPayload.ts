import { objectType } from "nexus";

export const UpdateSkillsPayload = objectType({
	name: "UpdateSkillsPayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.nonNull.field("record", { type: "User" });
	}
});
