import { arg, mutationField, nonNull } from "nexus";
import { PrismaUtils } from "../../../utils";

export const upvoteComment = mutationField("upvoteComment", {
	type: nonNull("UpvoteCommentPayload"),
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

		const record = await prisma.comment.update({
			where: PrismaUtils.nonNull(args.where),
			data: {
				upvoters: {
					connectOrCreate: {
						where: {
							commentId_userId: {
								commentId: comment.id,
								userId: user.id
							}
						},
						create: {
							userId: user.id
						}
					}
				}
			}
		});

		return { record };
	}
});
