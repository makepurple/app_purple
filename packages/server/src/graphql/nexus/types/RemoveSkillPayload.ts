import { objectType } from "nexus";

export const RemoveSkillPayload = objectType({
	name: "RemoveSkillPayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.field("record", { type: "Skill" });
	}
});
