import { objectType } from "nexus";

export const NotificationPostCommented = objectType({
	name: "NotificationPostCommented",
	definition: (t) => {
		t.implements("Notification");
		t.nonNull.field("post", {
			type: "Post",
			resolve: async (parent, args, { prisma }) => {
				return await prisma.post.findUniqueOrThrow({
					where: { id: parent.postId }
				});
			}
		});
		t.nonNull.string("postId");
	}
});
