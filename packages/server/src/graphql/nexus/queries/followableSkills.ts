import { findManyCursorConnection } from "@devoxa/prisma-relay-cursor-connection";
import { Skill } from "@prisma/client";
import { oneLine } from "common-tags";
import { arg, intArg, list, nonNull, queryField, stringArg } from "nexus";
import { PrismaUtils } from "../../../utils";

export const followableSkills = queryField("followableSkills", {
	type: nonNull("SkillConnection"),
	description: oneLine`
		Relay-style connection on Skill types.
	`,
	args: {
		after: stringArg(),
		before: stringArg(),
		first: intArg(),
		last: intArg(),
		orderBy: list(nonNull(arg({ type: "SkillOrderByInput" }))),
		where: arg({ type: "SkillWhereInput" })
	},
	resolve: async (parent, args, { prisma, user }) => {
		const connection = await findManyCursorConnection<Skill, { id: string }>(
			(paginationArgs) =>
				prisma.skill.findMany({
					...paginationArgs,
					orderBy: PrismaUtils.nonNull(args.orderBy),
					where: {
						...PrismaUtils.nonNull(args.where),
						...(user ? { some: { id: { equals: user.id } } } : {}),
						/**
						 * @description Only get skills for which there is at least 1 user,
						 * desiring user or post.
						 * @author David Lee
						 * @date January 15, 2022
						 */
						AND: {
							OR: [
								{ users: { some: {} } },
								{ desiringUsers: { some: {} } },
								{ posts: { some: {} } }
							],
							...PrismaUtils.nonNull(args.where)?.AND
						}
					}
				}),
			() => prisma.skill.count({ where: PrismaUtils.nonNull(args.where) }),
			{ ...PrismaUtils.handleRelayConnectionArgs(args) },
			{ ...PrismaUtils.handleRelayCursor() }
		);

		return connection;
	}
});
