import { objectType } from "nexus";

export const CreateCodeExamplePayload = objectType({
	name: "CreateCodeExamplePayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.nonNull.field("record", { type: "CodeExample" });
	}
});
