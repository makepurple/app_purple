import { arg, mutationField, nonNull } from "nexus";
import { PrismaUtils } from "../../../utils";

export const unfollowSkill = mutationField("unfollowSkill", {
	type: nonNull("UnfollowSkillPayload"),
	args: {
		where: nonNull(arg({ type: "FollowWhereUniqueInput" }))
	},
	authorize: async (parent, args, { prisma, user }) => {
		if (!user) return false;

		const follower = await prisma.followUser
			.findUnique({
				where: PrismaUtils.nonNull(args.where)
			})
			.follower();

		if (follower?.id !== user.id) return false;

		return true;
	},
	resolve: async (parent, args, { prisma, user }) => {
		if (!user) throw new Error();

		const record = await prisma.$transaction(async (transaction) => {
			const deleted = await transaction.follow.delete({
				where: PrismaUtils.nonNull(args.where)
			});

			await transaction.userActivity.deleteMany({
				where: { follow: { id: { equals: deleted.id } } }
			});

			return deleted;
		});

		return { record };
	}
});
