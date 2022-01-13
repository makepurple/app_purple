import { findManyCursorConnection } from "@devoxa/prisma-relay-cursor-connection";
import { Skill } from "@prisma/client";
import { oneLine } from "common-tags";
import { arg, intArg, nonNull, queryField, stringArg } from "nexus";
import { PrismaUtils } from "../../../utils";

export const skills = queryField("skills", {
	type: nonNull("SkillConnection"),
	description: oneLine`
		Relay-style connection on Skill types.
	`,
	args: {
		after: stringArg(),
		before: stringArg(),
		first: intArg(),
		last: intArg(),
		orderBy: arg({ type: "SkillOrderByInput" }),
		where: arg({ type: "SkillWhereInput" })
	},
	resolve: async (parent, args, { prisma }) => {
		const connection = await findManyCursorConnection<Skill, { id: string }>(
			(paginationArgs) =>
				prisma.skill.findMany({
					...paginationArgs,
					orderBy: PrismaUtils.nonNull(args.orderBy),
					where: PrismaUtils.nonNull(args.where)
				}),
			() => prisma.skill.count({ where: PrismaUtils.nonNull(args.where) }),
			{ ...PrismaUtils.handleRelayConnectionArgs(args) },
			{ ...PrismaUtils.handleRelayCursor() }
		);

		return connection;
	}
});
