import { Prisma } from "@prisma/client";
import { arg, mutationField, nonNull } from "nexus";
import { PermissionUtils, PrismaUtils } from "../../../utils";

export const deleteComment = mutationField("deleteComment", {
	type: nonNull("DeleteCommentPayload"),
	args: {
		where: nonNull(arg({ type: "CommentWhereUniqueInput" }))
	},
	authorize: async (parent, args, { prisma, user }) => {
		if (!user) return false;

		const author = await prisma.comment
			.findUnique({ where: PrismaUtils.nonNull(args.where) })
			.author();

		if (!author) return false;
		if (user.id === author.id) return true;
		if (PermissionUtils.isGreaterRole(user.role, author.role)) return true;

		return false;
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
