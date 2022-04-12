import { arg, mutationField, nonNull } from "nexus";
import { PrismaUtils } from "../../../utils";

export const unfollowSkill = mutationField("unfollowSkill", {
	type: nonNull("UnfollowSkillPayload"),
	args: {
		where: nonNull(arg({ type: "SkillWhereUniqueInput" }))
	},
	authorize: (parent, args, { user }) => {
		return !!user;
	},
	resolve: async (parent, args, { prisma, user }) => {
		if (!user) throw new Error();

		const following = await prisma.skill.findUnique({
			where: PrismaUtils.nonNull(args.where)
		});

		if (!following) throw new Error("This skill does not exist");

		const follow = await prisma.followSkill
			.findUnique({
				where: {
					followerId_followingId: {
						followerId: user.id,
						followingId: following.id
					}
				}
			})
			.follow();

		if (!follow) throw new Error();

		const record = await prisma.$transaction(async (transaction) => {
			const deleted = await transaction.follow
				.delete({
					where: { id: follow.id }
				})
				.followingSkill({
					include: { following: true }
				});

			return deleted?.following;
		});

		return { record };
	}
});
