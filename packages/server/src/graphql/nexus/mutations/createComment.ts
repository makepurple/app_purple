import { arg, mutationField, nonNull } from "nexus";
import { PrismaUtils } from "../../..";

export const createComment = mutationField("createComment", {
	type: nonNull("CreateCommentPayload"),
	args: {
		data: nonNull(arg({ type: "CommentCreateInput" }))
	},
	authorize: (parent, args, { user }) => {
		return !!user;
	},
	resolve: async (parent, args, { prisma, user }) => {
		if (!user) throw new Error();

		const record = await prisma.comment.create({
			data: {
				content: args.data.content,
				parent: {
					connect: PrismaUtils.nonNull(args.data.parent)
				},
				post: {
					connect: PrismaUtils.nonNull(args.data.post)
				},
				author: {
					connect: { id: user.id }
				}
			}
		});

		return { record };
	}
});
