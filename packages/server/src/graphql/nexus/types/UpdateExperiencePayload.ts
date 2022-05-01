import { objectType } from "nexus";

export const UpdateExperiencePayload = objectType({
	name: "UpdateExperiencePayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.list.nonNull.field("errors", { type: "UpdateExperienceError" });
		t.field("record", { type: "Experience" });
	}
});
