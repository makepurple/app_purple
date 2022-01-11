import { objectType } from "nexus";

export const UserActivityPublishPost = objectType({
	name: "UserActivityPublishPost",
	definition: (t) => {
		t.implements("UserActivity");
		t.nonNull.field("post", { type: "Post" });
		t.nonNull.string("postId");
	}
});
