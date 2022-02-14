import { objectType } from "nexus";

export const AddSkillMutationPayload = objectType({
	name: "AddSkillMutationPayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.nonNull.field("record", { type: "Skill" });
	}
});
