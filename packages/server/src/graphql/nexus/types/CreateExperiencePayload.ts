import { objectType } from "nexus";

export const CreateExperiencePayload = objectType({
	name: "CreateExperiencePayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.list.nonNull.field("errors", { type: "CreateExperienceError" });
		t.field("record", { type: "Experience" });
	}
});
