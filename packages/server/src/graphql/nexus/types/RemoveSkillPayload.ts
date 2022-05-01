import { objectType } from "nexus";

export const RemoveSkillPayload = objectType({
	name: "RemoveSkillPayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.list.nonNull.field("errors", { type: "RemoveSkillError" });
		t.field("record", { type: "Skill" });
	}
});
