import { objectType } from "nexus";

export const RemoveDesiredSkillMutationPayload = objectType({
	name: "RemoveDesiredSkillMutationPayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.field("record", { type: "Skill" });
	}
});
