import { arg, mutationField, nonNull } from "nexus";
import { PrismaUtils } from "../../..";

export const downvoteComment = mutationField("downvoteComment", {
	type: nonNull("DownvoteCommentPayload"),
	args: {
		where: nonNull(arg({ type: "CommentWhereUniqueInput" }))
	},
	authorize: (parent, args, { user }) => {
		return !!user;
	},
	resolve: async (parent, args, { prisma, user }) => {
		if (!user) throw new Error();

		const comment = await prisma.comment.findUnique({
			where: PrismaUtils.nonNull(args.where)
		});

		if (!comment) throw new Error();

		const { comment: record } = await prisma.commentUpvoter.delete({
			where: {
				commentId_userId: {
					commentId: comment.id,
					userId: user.id
				}
			},
			include: {
				comment: true
			}
		});

		return { record };
	}
});
