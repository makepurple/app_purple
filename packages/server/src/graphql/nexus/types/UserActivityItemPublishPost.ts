import { objectType } from "nexus";

export const UserActivityItemPublishPost = objectType({
	name: "UserActivityItemPublishPost",
	definition: (t) => {
		t.implements("UserActivity");
		t.nonNull.field("post", { type: "Post" });
		t.nonNull.string("postId");
	}
});
