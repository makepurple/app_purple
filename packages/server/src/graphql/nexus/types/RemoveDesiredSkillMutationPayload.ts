import { objectType } from "nexus";

export const RemoveDesiredSkillMutationPayload = objectType({
	name: "RemoveDesiredSkillMutationPayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.nonNull.field("record", { type: "Skill" });
	}
});
