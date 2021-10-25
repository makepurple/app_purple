import { PrismaUtils } from "@/server/utils";
import { findManyCursorConnection } from "@devoxa/prisma-relay-cursor-connection";
import { Post } from "@prisma/client";
import { oneLine } from "common-tags";
import { arg, intArg, nonNull, queryField, stringArg } from "nexus";

export const postConnection = queryField("postConnection", {
	type: nonNull("PostConnection"),
	description: oneLine`
		Relay-style connection on Post types.
	`,
	args: {
		after: stringArg(),
		before: stringArg(),
		first: intArg(),
		last: intArg(),
		where: arg({ type: "PostWhereInput" })
	},
	resolve: async (parent, args, { prisma }) => {
		const connection = await findManyCursorConnection<Post, { id: number }>(
			(paginationArgs) =>
				prisma.post.findMany({
					...paginationArgs,
					where: {
						author: {
							name: PrismaUtils.nonNull(args.where?.author?.name)
						},
						authorId: args.where?.authorId ?? undefined
					}
				}),
			() => prisma.post.count(),
			{ ...PrismaUtils.handleRelayConnectionArgs(args) },
			{ ...PrismaUtils.handleRelayCursor() }
		);

		return connection;
	}
});
