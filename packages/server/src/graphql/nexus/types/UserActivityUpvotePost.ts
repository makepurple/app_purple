import { objectType } from "nexus";

export const UserActivityUpvotePost = objectType({
	name: "UserActivityUpvotePost",
	definition: (t) => {
		t.implements("UserActivity");
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
