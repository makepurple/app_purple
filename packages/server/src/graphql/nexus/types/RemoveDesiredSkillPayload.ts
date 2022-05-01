import { objectType } from "nexus";

export const RemoveDesiredSkillPayload = objectType({
	name: "RemoveDesiredSkillPayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.field("record", { type: "Skill" });
	}
});
