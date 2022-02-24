import { objectType } from "nexus";

export const UpdateCodeExamplePayload = objectType({
	name: "UpdateCodeExamplePayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.nonNull.field("record", { type: "CodeExample" });
	}
});
