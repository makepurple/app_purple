import { objectType } from "nexus";

export const UpvoteCodeExamplePayload = objectType({
	name: "UpvoteCodeExamplePayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.field("record", { type: "CodeExample" });
	}
});
