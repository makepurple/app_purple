import { objectType } from "nexus";

export const RemoveSkillMutationPayload = objectType({
	name: "RemoveSkillMutationPayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.nonNull.field("record", { type: "User" });
	}
});
