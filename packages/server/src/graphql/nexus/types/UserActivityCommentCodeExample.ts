import { objectType } from "nexus";

export const UserActivityCommentCodeExample = objectType({
	name: "UserActivityCommentCodeExample",
	definition: (t) => {
		t.implements("UserActivity");
		t.nonNull.field("comment", {
			type: "Comment",
			resolve: async (parent, args, { prisma }) => {
				return await prisma.comment.findUniqueOrThrow({
					where: { id: parent.commentId }
				});
			}
		});
		t.nonNull.string("commentId");
	}
});
