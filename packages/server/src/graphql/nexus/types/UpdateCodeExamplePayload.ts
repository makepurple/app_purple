import { objectType } from "nexus";

export const UpdateCodeExamplePayload = objectType({
	name: "UpdateCodeExamplePayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.field("record", { type: "CodeExample" });
	}
});
