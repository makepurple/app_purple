import { objectType } from "nexus";

export const AddDesiredSkillPayload = objectType({
	name: "AddDesiredSkillPayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.list.nonNull.field("errors", { type: "AddDesiredSkillError" });
		t.field("record", { type: "Skill" });
	}
});
