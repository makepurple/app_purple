import { objectType } from "nexus";

export const RemoveDesiredSkillPayload = objectType({
	name: "RemoveDesiredSkillPayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.list.nonNull.field("errors", { type: "RemoveDesiredSkillError" });
		t.field("record", { type: "Skill" });
	}
});
