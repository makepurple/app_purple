import { objectType } from "nexus";

export const UserActivityCommentCodeExample = objectType({
	name: "UserActivityCommentCodeExample",
	definition: (t) => {
		t.implements("UserActivity");
		t.nonNull.field("comment", {
			type: "Comment",
			resolve: async (parent, args, { prisma }) => {
				return await prisma.comment.findUnique({
					where: { id: parent.commentId },
					rejectOnNotFound: true
				});
			}
		});
		t.nonNull.string("commentId");
	}
});
