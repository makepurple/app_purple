import { Experience } from "@prisma/client";
import { arg, intArg, list, nonNull, queryField, stringArg } from "nexus";
import { PrismaUtils } from "../../../utils";

export const experiences = queryField("experiences", {
	type: nonNull("ExperienceConnection"),
	args: {
		after: stringArg(),
		before: stringArg(),
		first: intArg(),
		last: intArg(),
		orderBy: list(nonNull(arg({ type: "ExperienceOrderByInput" }))),
		where: arg({ type: "ExperienceWhereInput" })
	},
	resolve: async (parent, args, { prisma }) => {
		const connection = await PrismaUtils.findManyCursorConnection<Experience, { id: string }>(
			(paginationArgs) =>
				prisma.experience.findMany({
					...paginationArgs,
					orderBy: PrismaUtils.nonNull(args.orderBy),
					where: PrismaUtils.nonNull(args.where)
				}),
			() => prisma.experience.count({ where: PrismaUtils.nonNull(args.where) }),
			{ ...PrismaUtils.handleRelayConnectionArgs(args) },
			{ ...PrismaUtils.handleRelayCursor() }
		);

		return connection;
	}
});
