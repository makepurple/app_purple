import { objectType } from "nexus";

export const UpvoteCodeExamplePayload = objectType({
	name: "UpvoteCodeExamplePayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.nonNull.field("record", { type: "CodeExample" });
	}
});
