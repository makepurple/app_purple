import { arg, nonNull, queryField } from "nexus";
import { PrismaUtils } from "../../../utils";

export const comment = queryField("comment", {
	type: "Comment",
	args: {
		where: nonNull(arg({ type: "CommentWhereUniqueInput" }))
	},
	resolve: async (parent, args, { prisma }) => {
		return await prisma.comment.findUnique({
			where: PrismaUtils.nonNull(args.where)
		});
	}
});
