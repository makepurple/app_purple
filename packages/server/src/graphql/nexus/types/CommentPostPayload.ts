import { objectType } from "nexus";

export const CommentPostPayload = objectType({
	name: "CommentPostPayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.field("record", { type: "Comment" });
	}
});
