import { UserActivityType } from "@prisma/client";
import { arg, mutationField, nonNull } from "nexus";
import { PrismaUtils } from "../../../utils";

export const followSkill = mutationField("followSkill", {
	type: nonNull("FollowUserPayload"),
	args: {
		where: nonNull(arg({ type: "SkillWhereUniqueInput" }))
	},
	authorize: (parent, args, { user }) => {
		return !!user;
	},
	resolve: async (parent, args, { prisma, user }) => {
		if (!user) throw new Error();

		const record = await prisma.followSkill
			.create({
				data: {
					follow: {
						create: {
							activities: {
								create: {
									type: UserActivityType.FollowSkill,
									user: { connect: { id: user.id } }
								}
							}
						}
					},
					follower: { connect: { id: user.id } },
					following: {
						connect: PrismaUtils.nonNull(args.where)
					}
				},
				include: {
					follow: true
				}
			})
			.then((result) => result.follow);

		return { record };
	}
});
