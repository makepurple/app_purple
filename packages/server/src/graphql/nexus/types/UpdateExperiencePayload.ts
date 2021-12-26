import { objectType } from "nexus";

export const UpdateExperiencePayload = objectType({
	name: "UpdateExperiencePayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.nonNull.field("record", { type: "Experience" });
	}
});
