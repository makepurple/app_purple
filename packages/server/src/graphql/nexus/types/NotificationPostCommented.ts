import { objectType } from "nexus";

export const NotificationPostCommented = objectType({
	name: "NotificationPostCommented",
	definition: (t) => {
		t.implements("Notification");
		t.nonNull.field("post", { type: "Post" });
		t.nonNull.string("postId");
	}
});
