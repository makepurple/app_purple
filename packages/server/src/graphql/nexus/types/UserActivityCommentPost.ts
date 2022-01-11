import { objectType } from "nexus";

export const UserActivityCommentPost = objectType({
	name: "UserActivityCommentPost",
	definition: (t) => {
		t.implements("UserActivity");
		t.nonNull.field("comment", { type: "Comment" });
		t.nonNull.string("commentId");
	}
});
