import { objectType } from "nexus";

export const CreateCodeExamplePayload = objectType({
	name: "CreateCodeExamplePayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.list.nonNull.field("errors", { type: "CreateCodeExampleError" });
		t.field("record", { type: "CodeExample" });
	}
});
