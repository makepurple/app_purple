import { objectType } from "nexus";

export const CreateCommentPayload = objectType({
	name: "CreateCommentPayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.nonNull.field("record", { type: "Comment" });
	}
});
