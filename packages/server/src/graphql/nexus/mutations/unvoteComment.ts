import { arg, mutationField, nonNull } from "nexus";
import { PrismaUtils } from "../../../utils";

export const unvoteComment = mutationField("unvoteComment", {
	type: nonNull("UnvoteCommentPayload"),
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
			select: {
				comment: true
			}
		});

		return { record };
	}
});
