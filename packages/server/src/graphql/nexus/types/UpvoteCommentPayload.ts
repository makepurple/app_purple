import { objectType } from "nexus";

export const UpvoteCommentPayload = objectType({
	name: "UpvoteCommentPayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.field("record", { type: "Comment" });
	}
});
