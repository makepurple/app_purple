import { findManyCursorConnection } from "@devoxa/prisma-relay-cursor-connection";
import { Comment as _Comment } from "@prisma/client";
import { arg, intArg, nonNull, queryField, stringArg } from "nexus";
import { PrismaUtils } from "../../../utils";

export const comments = queryField("comments", {
	type: nonNull("CommentConnection"),
	args: {
		after: stringArg(),
		before: stringArg(),
		first: intArg(),
		last: intArg(),
		where: arg({ type: "CommentWhereInput" }),
		orderBy: arg({ type: "CommentOrderByInput" })
	},
	resolve: async (parent, args, { prisma }) => {
		const connection = await findManyCursorConnection<_Comment, { id: string }>(
			(paginationArgs) =>
				prisma.comment.findMany({
					...paginationArgs,
					where: PrismaUtils.nonNull(args.where),
					orderBy: PrismaUtils.nonNull(args.orderBy)
				}),
			() => prisma.comment.count(),
			{ ...PrismaUtils.handleRelayConnectionArgs(args) },
			{ ...PrismaUtils.handleRelayCursor }
		);

		return connection;
	}
});
