import { CodeExample } from "@prisma/client";
import { arg, intArg, list, nonNull, queryField, stringArg } from "nexus";
import { PrismaUtils } from "../../../utils";

export const codeExamples = queryField("codeExamples", {
	type: nonNull("CodeExampleConnection"),
	args: {
		after: stringArg(),
		before: stringArg(),
		first: intArg(),
		last: intArg(),
		orderBy: list(nonNull(arg({ type: "CodeExampleOrderByInput" }))),
		where: nonNull(arg({ type: "CodeExampleWhereInput" }))
	},
	resolve: async (parent, args, { prisma }) => {
		const connection = await PrismaUtils.findManyCursorConnection<CodeExample, { id: string }>(
			(paginationArgs) =>
				prisma.codeExample.findMany({
					...paginationArgs,
					orderBy: PrismaUtils.nonNull(args.orderBy),
					where: PrismaUtils.nonNull(args.where)
				}),
			() =>
				prisma.codeExample.count({
					where: PrismaUtils.nonNull(args.where)
				}),
			{ ...PrismaUtils.handleRelayConnectionArgs(args) },
			{ ...PrismaUtils.handleRelayCursor() }
		);

		return connection;
	}
});
