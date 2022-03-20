import { objectType } from "nexus";

export const UnvoteCodeExamplePayload = objectType({
	name: "UnvoteCodeExamplePayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.field("record", { type: "CodeExample" });
	}
});
