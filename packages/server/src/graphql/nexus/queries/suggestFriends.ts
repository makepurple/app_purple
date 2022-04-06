import { dayjs } from "@makepurple/utils";
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

		const viewer = await prisma.user.findUnique({
			where: { id: user.id },
			select: {
				_count: { select: { skills: true } },
				desiredSkills: { select: { skillId: true } },
				skills: { select: { skillId: true } }
			},
			rejectOnNotFound: true
		});

		const viewerDesiredSkillIds = viewer.desiredSkills.map((skill) => skill.skillId);
		const viewerSkillIds = viewer.skills.map((skill) => skill.skillId);

		const where: Prisma.UserWhereInput = {
			id: { not: { equals: user.id } },
			friendedBy: {
				none: {
					friender: { id: { equals: user.id } }
				}
			},
			friending: {
				none: {
					friending: { id: { equals: user.id } },
					OR: [
						{ rejectedAt: { equals: null } },
						{
							rejectedAt: {
								lte: dayjs().subtract(6, "month").toDate()
							}
						}
					]
				}
			},
			desiredSkills: {
				some: PrismaUtils.nonNull(args.where.desiredSkills)
			},
			skills: {
				some: PrismaUtils.nonNull(args.where.skills)
			},
			AND: [
				{ skills: { some: { skillId: { in: viewerDesiredSkillIds } } } },
				{ skills: { some: { skillId: { in: viewerSkillIds } } } }
			]
		};

		const orderBy = PrismaUtils.getRandomOrderBy<any>({
			direction: Prisma.SortOrder.desc,
			options: ["posts._count", "codeExamples._count", "skills._count"],
			seed: args.where.seed
		});

		const connection = await PrismaUtils.findManyCursorConnection<User, { id: string }>(
			({ cursor, skip, take }) =>
				prisma.user.findMany({
					cursor,
					skip,
					take,
					where,
					orderBy
				}),
			() => prisma.user.count({ where }),
			{ ...PrismaUtils.handleRelayConnectionArgs(args) },
			{ ...PrismaUtils.handleRelayCursor() }
		);

		return connection;
	}
});
