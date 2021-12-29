import { CommentUpdateInput } from "@makepurple/validators";
import { arg, mutationField, nonNull } from "nexus";
import { PrismaUtils } from "../../..";

export const updateComment = mutationField("updateComment", {
	type: nonNull("UpdateCommentPayload"),
	args: {
		data: nonNull(arg({ type: "CommentUpdateInput" })),
		where: nonNull(arg({ type: "CommentWhereUniqueInput" }))
	},
	authorize: async (parent, args, { prisma, user }) => {
		if (!user) return false;

		const author = await prisma.comment
			.findUnique({
				where: PrismaUtils.nonNull(args.where)
			})
			.author();

		if (user.id !== author?.id) return false;

		return true;
	},
	resolve: async (parent, args, { prisma }) => {
		const dataInput = CommentUpdateInput.validator({
			content: args.data.content ?? undefined
		});

		const record = await prisma.comment.update({
			where: PrismaUtils.nonNull(args.where),
			data: {
				content: dataInput.content ?? undefined
			}
		});

		return { record };
	}
});
