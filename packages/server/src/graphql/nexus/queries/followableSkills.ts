import { Prisma, Skill } from "@prisma/client";
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
		const where: Prisma.SkillWhereInput = {
			...PrismaUtils.nonNull(args.where),
			...(user ? { followedBy: { none: { follower: { id: { equals: user.id } } } } } : {}),
			OR: [{ users: { some: {} } }, { desiringUsers: { some: {} } }, { posts: { some: {} } }]
		};

		const connection = await PrismaUtils.findManyCursorConnection<Skill, { id: string }>(
			(paginationArgs) =>
				prisma.skill.findMany({
					...paginationArgs,
					orderBy: PrismaUtils.nonNull(args.orderBy),
					where
				}),
			() => prisma.skill.count({ where }),
			{ ...PrismaUtils.handleRelayConnectionArgs(args) },
			{ ...PrismaUtils.handleRelayCursor() }
		);

		return connection;
	}
});
