import { objectType } from "nexus";

export const UserActivityPublishPost = objectType({
	name: "UserActivityPublishPost",
	definition: (t) => {
		t.implements("UserActivity");
		t.nonNull.field("post", {
			type: "Post",
			resolve: async (parent, args, { prisma }) => {
				return await prisma.post.findUnique({
					where: { id: parent.postId },
					rejectOnNotFound: true
				});
			}
		});
		t.nonNull.string("postId");
	}
});
