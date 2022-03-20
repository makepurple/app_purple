import { objectType } from "nexus";

export const AddSkillMutationPayload = objectType({
	name: "AddSkillMutationPayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.field("record", { type: "Skill" });
	}
});
