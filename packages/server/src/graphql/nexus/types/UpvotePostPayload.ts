import { objectType } from "nexus";

export const UpvotePostPayload = objectType({
	name: "UpvotePostPayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.field("record", { type: "Post" });
	}
});
