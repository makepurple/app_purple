import { objectType } from "nexus";

export const DownvoteCommentPayload = objectType({
	name: "DownvoteCommentPayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.field("record", { type: "Comment" });
	}
});
