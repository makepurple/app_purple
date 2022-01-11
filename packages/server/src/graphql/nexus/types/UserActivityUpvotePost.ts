import { objectType } from "nexus";

export const UserActivityUpvotePost = objectType({
	name: "UserActivityUpvotePost",
	definition: (t) => {
		t.implements("UserActivity");
		t.nonNull.field("post", { type: "Post" });
		t.nonNull.string("postId");
	}
});
