import {
	findManyCursorConnection,
	PrismaFindManyArguments
} from "@devoxa/prisma-relay-cursor-connection";
import { LangUtils } from "@makepurple/utils";
import { Prisma, User } from "@prisma/client";
import { arg, intArg, nonNull, queryField, stringArg } from "nexus";
import { PrismaUtils } from "../../../utils";

/** 

Simple Recommender Criteria

filter by
* viewer did not already friend request within 6 months
* did not reject reviewer within 6 months
* is not the viewer themselves
* #skills > 20% viewer skills
* #skills > 20% viewer desired-skills

order by
* jitter: randomInt[jitter, 100 - jitter + 1] * (
	((# overlap skills:skills) + (# overlap skills:desired-skills)) / (#skills + #desiredSkills)
)

*/

export const suggestFriends = queryField("suggestFriends", {
	type: nonNull("UserConnection"),
	args: {
		after: stringArg(),
		first: intArg(),
		where: nonNull(arg({ type: "SuggestFriendsWhereInput" }))
	},
	authorize: (parent, args, { user }) => {
		return !!user;
	},
	resolve: async (parent, args, { prisma, user }) => {
		if (!user) throw new Error();

		const where = PrismaUtils.nonNull({
			...args.where,
			jitter: 0.15
		});

		const skillsThreshold = Prisma.raw(
			Math.max(Math.min(where.skillsThreshold ?? 0, 1), 0).toFixed(1)
		);
		const desiredSkillsThreshold = Prisma.raw(
			Math.max(Math.min(where.desiredSkillsThreshold ?? 0, 1), 0).toFixed(1)
		);
		const jitterSeed = Prisma.raw(
			`${Math.max(Math.min(((where.jitterSeed ?? 0) % 100) / 100, 1), 0)}`
		);
		const jitter = Math.ceil(Math.max(Math.min(where.jitter, 1), 0) * 100);

		const getUsers = ({ cursor, skip, take }: PrismaFindManyArguments<{ id: string }>) => {
			// Maybe set random seed if jitterSeed is provided
			const setSeed = LangUtils.isNil(where.jitterSeed)
				? Prisma.raw(`''`)
				: Prisma.raw(`CAST(SETSEED(${jitterSeed}) AS TEXT)`);

			// Every value can randomly be reduced by up to jitter %
			const jitterFactor = Prisma.raw(`(RANDOM() * ${100 - jitter + 1} + ${jitter})`);

			// Get total count of user's skills
			const skillTotal = Prisma.sql`(
				SELECT COUNT(*) AS "total"
				FROM "SkillsOnUsers" AS "suTotal"
				WHERE "suTotal"."userId" = ${user.id}
			)`;

			// Get total count of user's desired skills
			const desiredSkillTotal = Prisma.sql`(
				SELECT COUNT(*) AS "total"
				FROM "DesiredSkillsOnUsers" AS "dsuTotal"
				WHERE "dsuTotal"."userId" = ${user.id}
			)`;

			// Aggregate users by # of skills shared with the user
			const skillOverlap = Prisma.sql`(
				SELECT "su0"."userId", COUNT("su0"."skillId")
				FROM "SkillsOnUsers" AS "su0"
				INNER JOIN "SkillsOnUsers" AS "su1"
				ON "su0"."skillId" = "su1"."skillId"
				WHERE "su1"."userId" = ${user.id}
				GROUP BY "su0"."userId"
			)`;

			// Aggregate users by # of skills desired by the user
			const desiredSkillOverlap = Prisma.sql`(
				SELECT "dsu0"."userId", COUNT("dsu0"."skillId")
				FROM "SkillsOnUsers" AS "dsu0"
				INNER JOIN "DesiredSkillsOnUsers" AS "dsu1"
				ON "dsu0"."skillId" = "dsu1"."skillId"
				WHERE "dsu1"."userId" = ${user.id}
				GROUP BY "dsu0"."userId"
			)`;

			// Pagination cursor, if one exists
			const cursorOrder = cursor?.id
				? Prisma.sql`(
					SELECT "SuggestedFriends"."hidden_order" AS "User_hidden_order"
					FROM "SuggestedFriends"
					WHERE "SuggestedFriends"."id" = ${cursor.id}
				)`
				: Prisma.sql`(
					SELECT 0 as "User_hidden_order"
				)`;

			return Prisma.sql`
				WITH "SuggestedFriends" AS (
					(
						SELECT ${setSeed} AS "hidden_seed", NULL AS "hidden_order", "User".*
						FROM "User"
						WHERE "User"."id" = ${user.id}
					)
					UNION ALL
					(
						SELECT
							'',
							${jitterFactor} * CAST(
								(COALESCE("skillOverlap"."count", 0) + COALESCE("desiredSkillOverlap"."count", 0))
								AS DECIMAL
							) / GREATEST("skillTotal"."total" + "desiredSkillTotal"."total", 1),
							"User".*
						FROM
							${skillTotal} AS "skillTotal",
							${desiredSkillTotal} AS "desiredSkillTotal",
							"User"
							LEFT JOIN ${skillOverlap} AS "skillOverlap"
							ON ("User"."id") = ("skillOverlap"."userId")
							LEFT JOIN ${desiredSkillOverlap} AS "desiredSkillOverlap"
							ON ("User"."id") = ("desiredSkillOverlap"."userId")
						WHERE (
							COALESCE("skillOverlap"."count", 0) >= (${skillsThreshold} * "skillTotal"."total") AND
							COALESCE("desiredSkillOverlap"."count", 0) >= (${desiredSkillsThreshold} * "desiredSkillTotal"."total")
						)
					)
					OFFSET 1
				)
				SELECT "SuggestedFriends".*
				FROM
					"SuggestedFriends",
					${cursorOrder} as "orderCmp"
				${
					// Paginate after the cursor, if one exists
					cursor?.id
						? Prisma.sql`WHERE "SuggestedFriends"."hidden_order" >= "orderCmp"."User_hidden_order"`
						: Prisma.empty
				}
				ORDER BY "SuggestedFriends"."hidden_order"
				LIMIT ${take}
				OFFSET ${skip};
			`;
		};

		const connection = await findManyCursorConnection<User, { id: string }>(
			(paginationArgs) => prisma.$queryRaw<User[]>(getUsers(paginationArgs)),
			() => prisma.user.count(),
			{ ...PrismaUtils.handleRelayConnectionArgs(args) },
			{ ...PrismaUtils.handleRelayCursor }
		);

		return connection;
	}
});
