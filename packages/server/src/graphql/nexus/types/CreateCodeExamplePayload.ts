import { objectType } from "nexus";

export const CreateCodeExamplePayload = objectType({
	name: "CreateCodeExamplePayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.field("record", { type: "CodeExample" });
	}
});
