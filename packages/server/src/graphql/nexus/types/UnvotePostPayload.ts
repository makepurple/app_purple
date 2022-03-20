import { objectType } from "nexus";

export const UnvotePostPayload = objectType({
	name: "UnvotePostPayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.field("record", { type: "Post" });
	}
});
