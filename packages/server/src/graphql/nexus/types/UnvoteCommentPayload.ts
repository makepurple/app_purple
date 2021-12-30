import { objectType } from "nexus";

export const UnvoteCommentPayload = objectType({
	name: "UnvoteCommentPayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.nonNull.field("record", { type: "Comment" });
	}
});
