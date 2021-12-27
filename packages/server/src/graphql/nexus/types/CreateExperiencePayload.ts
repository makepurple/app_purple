import { objectType } from "nexus";

export const CreateExperiencePayload = objectType({
	name: "CreateExperiencePayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.nonNull.field("record", { type: "Experience" });
	}
});