import { findManyCursorConnection } from "@devoxa/prisma-relay-cursor-connection";
import { Repository } from "@prisma/client";
import { arg, intArg, nonNull, queryField, stringArg } from "nexus";
import { PrismaUtils } from "../../../utils";

export const repositories = queryField("repositories", {
	type: nonNull("RepositoryConnection"),
	args: {
		after: stringArg(),
		before: stringArg(),
		first: intArg(),
		last: intArg(),
		where: arg({ type: "RepositoryWhereInput" })
	},
	resolve: async (parent, args, { prisma }) => {
		const connection = await findManyCursorConnection<Repository, { id: string }>(
			(paginationArgs) =>
				prisma.repository.findMany({
					...paginationArgs,
					where: PrismaUtils.nonNull(args.where)
				}),
			() =>
				prisma.repository.count({
					where: PrismaUtils.nonNull(args.where)
				}),
			{ ...PrismaUtils.handleRelayConnectionArgs(args) },
			{ ...PrismaUtils.handleRelayCursor() }
		);

		return connection;
	}
});
