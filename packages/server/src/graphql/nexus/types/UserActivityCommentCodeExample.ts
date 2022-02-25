import { objectType } from "nexus";

export const UserActivityCommentCodeExample = objectType({
	name: "UserActivityCommentCodeExample",
	definition: (t) => {
		t.implements("UserActivity");
		t.nonNull.field("comment", { type: "Comment" });
		t.nonNull.string("commentId");
	}
});
