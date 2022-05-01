import { objectType } from "nexus";

export const UpdateCodeExamplePayload = objectType({
	name: "UpdateCodeExamplePayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.list.nonNull.field("errors", { type: "UpdateCodeExampleError" });
		t.field("record", { type: "CodeExample" });
	}
});
