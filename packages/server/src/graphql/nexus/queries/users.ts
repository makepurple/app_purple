import { findManyCursorConnection } from "@devoxa/prisma-relay-cursor-connection";
import { User } from "@prisma/client";
import { arg, intArg, list, nonNull, queryField, stringArg } from "nexus";
import { PrismaUtils } from "../../../utils";

export const users = queryField("users", {
	type: nonNull("UserConnection"),
	args: {
		after: stringArg(),
		before: stringArg(),
		first: intArg(),
		last: intArg(),
		orderBy: list(nonNull(arg({ type: "UserOrderByInput" }))),
		where: arg({ type: "UserWhereInput" })
	},
	resolve: async (parent, args, { prisma }) => {
		const connection = await findManyCursorConnection<User, { id: string }>(
			(paginationArgs) =>
				prisma.user.findMany({
					...paginationArgs,
					orderBy: PrismaUtils.nonNull(args.orderBy),
					where: PrismaUtils.nonNull(args.where)
				}),
			() =>
				prisma.user.count({
					where: {}
				}),
			{ ...PrismaUtils.handleRelayConnectionArgs(args) },
			{ ...PrismaUtils.handleRelayCursor() }
		);

		return connection;
	}
});
