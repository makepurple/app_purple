import { objectType } from "nexus";

export const AddDesiredSkillMutationPayload = objectType({
	name: "AddDesiredSkillMutationPayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.nonNull.field("record", { type: "Skill" });
	}
});
