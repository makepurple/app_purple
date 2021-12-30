import { objectType } from "nexus";

export const DownvoteCommentPayload = objectType({
	name: "DownvoteCommentPayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.nonNull.field("record", { type: "Comment" });
	}
});
