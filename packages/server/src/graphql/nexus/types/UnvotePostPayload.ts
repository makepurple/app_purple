import { objectType } from "nexus";

export const UnvotePostPayload = objectType({
	name: "UnvotePostPayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.nonNull.field("record", { type: "Post" });
	}
});
