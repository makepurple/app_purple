import { Prisma } from "@prisma/client";
import { arg, mutationField, nonNull } from "nexus";
import { PrismaUtils } from "../../..";

export const deleteComment = mutationField("deleteComment", {
	type: nonNull("DeleteCommentPayload"),
	args: {
		where: nonNull(arg({ type: "CommentWhereUniqueInput" }))
	},
	authorize: async (parent, args, { prisma, user }) => {
		if (!user) return false;

		const author = await prisma.comment
			.findUnique({ where: PrismaUtils.nonNull(args.where) })
			.author({ select: { id: true } });

		if (user.id !== author?.id) return false;

		return true;
	},
	resolve: async (parent, args, { prisma }) => {
		const record = await prisma.comment.update({
			where: PrismaUtils.nonNull(args.where),
			data: {
				content: Prisma.DbNull
			}
		});

		return { record };
	}
});
