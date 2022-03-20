import { objectType } from "nexus";

export const UpdateCommentPayload = objectType({
	name: "UpdateCommentPayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.field("record", { type: "Comment" });
	}
});
