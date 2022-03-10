import { objectType } from "nexus";

export const PostImage = objectType({
	name: "PostImage",
	definition: (t) => {
		t.nonNull.id("id");
		t.nonNull.field("post", {
			type: "Post",
			resolve: (parent, args, { prisma }) => {
				return prisma.post.findUnique({
					where: {
						id: parent.postId
					},
					rejectOnNotFound: true
				});
			}
		});
		t.nonNull.string("postId");
		t.nonNull.string("url");
	}
});
