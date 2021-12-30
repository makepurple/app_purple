import { findManyCursorConnection } from "@devoxa/prisma-relay-cursor-connection";
import { Experience } from "@prisma/client";
import { arg, intArg, nonNull, queryField, stringArg } from "nexus";
import { PrismaUtils } from "../../../utils";

export const experiences = queryField("experiences", {
	type: nonNull("ExperienceConnection"),
	args: {
		after: stringArg(),
		before: stringArg(),
		first: intArg(),
		last: intArg(),
		orderBy: arg({ type: "ExperienceOrderByInput" }),
		where: arg({ type: "ExperienceWhereInput" })
	},
	resolve: async (parent, args, { prisma }) => {
		const connection = await findManyCursorConnection<Experience, { id: string }>(
			(paginationArgs) =>
				prisma.experience.findMany({
					...paginationArgs,
					where: PrismaUtils.nonNull(args.where)
				}),
			() => prisma.experience.count(),
			{ ...PrismaUtils.handleRelayConnectionArgs(args) },
			{ ...PrismaUtils.handleRelayCursor() }
		);

		return connection;
	}
});
