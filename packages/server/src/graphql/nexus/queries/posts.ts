import { Post } from "@makepurple/prisma";
import { oneLine } from "common-tags";
import { arg, intArg, list, nonNull, queryField, stringArg } from "nexus";
import { PrismaUtils } from "../../../utils";

export const posts = queryField("posts", {
	type: nonNull("PostConnection"),
	description: oneLine`
		Relay-style connection on Post types.
	`,
	args: {
		after: stringArg(),
		before: stringArg(),
		first: intArg(),
		last: intArg(),
		orderBy: list(nonNull(arg({ type: "PostOrderByInput" }))),
		where: arg({ type: "PostWhereInput" })
	},
	resolve: async (parent, args, { prisma }) => {
		const connection = await PrismaUtils.findManyCursorConnection<Post, { id: string }>(
			(paginationArgs) =>
				prisma.post.findMany({
					...paginationArgs,
					orderBy: PrismaUtils.nonNull(args.orderBy),
					where: PrismaUtils.nonNull(args.where)
				}),
			() => prisma.post.count(),
			{ ...PrismaUtils.handleRelayConnectionArgs(args) },
			{ ...PrismaUtils.handleRelayCursor() }
		);

		return connection;
	}
});
