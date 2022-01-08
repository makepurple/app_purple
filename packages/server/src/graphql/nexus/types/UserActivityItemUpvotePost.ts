import { objectType } from "nexus";

export const UserActivityItemUpvotePost = objectType({
	name: "UserActivityItemUpvotePost",
	definition: (t) => {
		t.implements("UserActivity");
		t.nonNull.field("post", { type: "Post" });
		t.nonNull.string("postId");
	}
});
