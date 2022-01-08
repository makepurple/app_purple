import { objectType } from "nexus";

export const UserActivityItemCommentPost = objectType({
	name: "UserActivityItemCommentPost",
	definition: (t) => {
		t.implements("UserActivity");
		t.nonNull.field("comment", { type: "Comment" });
		t.nonNull.string("commentId");
	}
});
