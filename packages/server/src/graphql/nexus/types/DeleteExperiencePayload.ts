import { objectType } from "nexus";

export const DeleteExperiencePayload = objectType({
	name: "DeleteExperiencePayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.nonNull.field("record", { type: "Experience" });
	}
});
