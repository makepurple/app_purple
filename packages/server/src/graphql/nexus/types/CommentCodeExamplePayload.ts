import { objectType } from "nexus";

export const CommentCodeExamplePayload = objectType({
	name: "CommentCodeExamplePayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.nonNull.field("record", { type: "Comment" });
	}
});
