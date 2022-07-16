import { objectType } from "nexus";

export const PostImage = objectType({
	name: "PostImage",
	definition: (t) => {
		t.implements("Node");
		t.nonNull.field("post", {
			type: "Post",
			resolve: (parent, args, { prisma }) => {
				return prisma.post.findUniqueOrThrow({
					where: {
						id: parent.postId
					}
				});
			}
		});
		t.nonNull.string("postId");
		t.nonNull.string("url");
	}
});
