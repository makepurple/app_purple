import { findManyCursorConnection } from "@devoxa/prisma-relay-cursor-connection";
import { dayjs, LangUtils, MathUtils } from "@makepurple/utils";
import { Prisma, User } from "@prisma/client";
import { arg, intArg, nonNull, queryField, stringArg } from "nexus";
import { PrismaUtils } from "../../../utils";

/** 

Simple Recommender Criteria

filter by
[x] is not a friender to the viewer
[x] was not friend requested by the viewer within 6 months
[x] did not reject viewer within 6 months
[x] is not the viewer themselves
[x] #skills > threshold % viewer skills
[x] #skills > threshold % viewer desired-skills

order by
* jitter * (
	(weight * % overlap skills:skills)
	+ (weight * % overlap skills:desired-skills)
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

		const where = PrismaUtils.nonNull(args.where);

		const skillIds =
			where.skills &&
			(await prisma.skill
				.findMany({
					take: 50,
					where: where.skills,
					select: { id: true }
				})
				.then((results) => results.map((result) => result.id)));

		const skillsThreshold = Prisma.raw(
			MathUtils.clamp(where.skillsThreshold ?? 0, [0, 1]).toFixed(1)
		);
		const desiredSkillsThreshold = Prisma.raw(
			MathUtils.clamp(where.desiredSkillsThreshold ?? 0, [0, 1]).toFixed(1)
		);
		const jitterSeed = Prisma.raw(
			MathUtils.clamp(((where.jitterSeed ?? 0) % 100) / 100, [0, 1]).toFixed(1)
		);
		const jitter = Math.ceil(MathUtils.clamp(where.jitter ?? 0.15, [0, 1]) * 100);

		const sixMonthsAgo = dayjs(new Date()).subtract(6, "months").toDate();

		const getSuggestedFriends = () => {
			// Maybe set random seed if jitterSeed is provided
			const setSeed = LangUtils.isNil(where.jitterSeed)
				? Prisma.raw(`''`)
				: Prisma.raw(`CAST(SETSEED(${jitterSeed}) AS TEXT)`);

			// Every value can randomly be reduced by up to jitter %
			const jitterFactor = Prisma.raw(`(RANDOM() * ${100 - jitter + 1} + ${jitter})`);

			// Get total count of viewer's skills
			const skillTotal = Prisma.sql`(
				SELECT COUNT(*) AS "total"
				FROM "SkillsOnUsers" AS "suTotal"
				WHERE "suTotal"."userId" = ${user.id}
			)`;

			// Get total count of viewer's desired skills
			const desiredSkillTotal = Prisma.sql`(
				SELECT COUNT(*) AS "total"
				FROM "DesiredSkillsOnUsers" AS "dsuTotal"
				WHERE "dsuTotal"."userId" = ${user.id}
			)`;

			// Filter suggestions by users' skills
			const skills = skillIds?.length
				? Prisma.sql`(
					SELECT "SkillsOnUsers"."userId"
					FROM "SkillsOnUsers"
					WHERE "SkillsOnUsers"."skillId" IN (${Prisma.join(skillIds)})
				)`
				: Prisma.empty;

			// Aggregate users by # of skills shared with the viewer
			const skillOverlap = Prisma.sql`(
				SELECT "su0"."userId", COUNT("su0"."skillId")
				FROM "SkillsOnUsers" AS "su0"
				INNER JOIN "SkillsOnUsers" AS "su1"
				ON "su0"."skillId" = "su1"."skillId"
				WHERE "su1"."userId" = ${user.id}
				GROUP BY "su0"."userId"
			)`;

			// Aggregate users by # of skills desired by the viewer
			const desiredSkillOverlap = Prisma.sql`(
				SELECT "dsu0"."userId", COUNT("dsu0"."skillId")
				FROM "SkillsOnUsers" AS "dsu0"
				INNER JOIN "DesiredSkillsOnUsers" AS "dsu1"
				ON "dsu0"."skillId" = "dsu1"."skillId"
				WHERE "dsu1"."userId" = ${user.id}
				GROUP BY "dsu0"."userId"
			)`;

			// Users that have friended the viewer
			// or have been friend requested by the viewer in the last 6 months
			// or have rejected a friend request of the viewer
			const nonFriended = Prisma.sql`(
				SELECT "Friendship"."id"
				FROM "Friendship"
				WHERE (
					"Friendship"."rejected" = FALSE
					AND (
						(
							"Friendship"."frienderId" = "User"."id"
							AND "Friendship"."friendingId" = ${user.id}
						)
						OR (
							"Friendship"."frienderId" = ${user.id}
							AND "Friendship"."friendingId" = "User"."id"
							AND "Friendship"."updatedAt" <= ${sixMonthsAgo}
						)
					)
				)
				OR (
					"Friendship"."rejected" = TRUE
					AND "Friendship"."frienderId" = ${user.id}
					AND "Friendship"."updatedAt" <= ${sixMonthsAgo}
				)
				
			)`;

			return Prisma.sql`
				(
					SELECT
						DISTINCT "User"."id" as "userId",
						${setSeed} AS "hidden_seed",
						NULL AS "hidden_order",
						"User".*
					FROM "User"
					WHERE "User"."id" = ${user.id}
				)
				UNION ALL
				(
					SELECT
						DISTINCT "User"."id" as "userId",
						'',
						${jitterFactor} * (
							(
								${MathUtils.clamp(where.weights?.skillsOverlap ?? 1, [0, 1]).toFixed(1)}
								* CAST(COALESCE("skillOverlap"."count", 0) AS DECIMAL)
								/ GREATEST("skillTotal"."total", 1)
							)
							+ (
								${MathUtils.clamp(where.weights?.desiredSkillsOverlap ?? 1, [0, 1]).toFixed(1)}
								* CAST(COALESCE("desiredSkillOverlap"."count", 0) AS DECIMAL)
								/ GREATEST("desiredSkillTotal"."total", 1)
							)
						),
						"User".*
					FROM
						${skillTotal} AS "skillTotal",
						${desiredSkillTotal} AS "desiredSkillTotal",
						"User"
						${
							skillIds?.length
								? Prisma.sql`
									INNER JOIN ${skills} as "su0"
									ON ("User"."id") = ("su0"."userId")
								`
								: Prisma.empty
						}
						LEFT JOIN ${skillOverlap} AS "skillOverlap"
						ON ("User"."id") = ("skillOverlap"."userId")
						LEFT JOIN ${desiredSkillOverlap} AS "desiredSkillOverlap"
						ON ("User"."id") = ("desiredSkillOverlap"."userId")
					WHERE (
						NOT EXISTS ${nonFriended}
						AND COALESCE("skillOverlap"."count", 0) >= (${skillsThreshold} * "skillTotal"."total")
						AND COALESCE("desiredSkillOverlap"."count", 0) >= (${desiredSkillsThreshold} * "desiredSkillTotal"."total")
					)
				)
				OFFSET 1
			`;
		};

		const connection = await findManyCursorConnection<User, { id: string }>(
			async ({ cursor, skip = 0, take = 20 }) => {
				// Pagination cursor, if one exists
				const cursorOrder = cursor?.id
					? Prisma.sql`
						SELECT "SuggestedFriends"."hidden_order" AS "User_hidden_order"
						FROM "SuggestedFriends"
						WHERE "SuggestedFriends"."id" = ${cursor.id}
					`
					: Prisma.sql`SELECT 0 as "User_hidden_order"`;

				return await prisma.$queryRaw<User[]>(
					Prisma.sql`
						WITH "SuggestedFriends" AS (${getSuggestedFriends()})
						SELECT "SuggestedFriends".*
						FROM "SuggestedFriends", (${cursorOrder}) as "orderCmp"
						WHERE
							"SuggestedFriends"."id" != ${user.id} AND
							${
								// Paginate after the cursor, if one exists
								cursor?.id
									? Prisma.sql`"SuggestedFriends"."hidden_order" >= "orderCmp"."User_hidden_order"`
									: Prisma.sql`1 = 1`
							}
						ORDER BY "SuggestedFriends"."hidden_order"
						LIMIT ${take}
						OFFSET ${skip};
				`
				);
			},
			() =>
				prisma
					.$queryRaw<{ count: number }>(
						Prisma.sql`
							SELECT COUNT(*) as "count"
							FROM (${getSuggestedFriends()});
						`
					)
					.then((result) => result.count),
			{ ...PrismaUtils.handleRelayConnectionArgs(args) },
			{ ...PrismaUtils.handleRelayCursor() }
		);

		return connection;
	}
});
