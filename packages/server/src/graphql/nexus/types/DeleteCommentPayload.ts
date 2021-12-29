import { objectType } from "nexus";

export const DeleteCommentPayload = objectType({
	name: "DeleteCommentPayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.nonNull.field("record", { type: "Comment" });
	}
});
