import { objectType } from "nexus";

export const AddSkillPayload = objectType({
	name: "AddSkillPayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.list.nonNull.field("errors", { type: "AddSkillError" });
		t.field("record", { type: "Skill" });
	}
});
