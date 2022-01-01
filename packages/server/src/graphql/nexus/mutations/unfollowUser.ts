import { arg, mutationField, nonNull } from "nexus";
import { PrismaUtils } from "../../../utils";

export const unfollowUser = mutationField("unfollowUser", {
	type: nonNull("UnfollowUserPayload"),
	args: {
		where: nonNull(arg({ type: "FollowWhereUniqueInput" }))
	},
	authorize: async (parent, args, { prisma, user }) => {
		if (!user) return false;

		const follower = await prisma.follow
			.findUnique({
				where: PrismaUtils.nonNull(args.where)
			})
			.follower();

		if (follower?.id !== user.id) return false;

		return true;
	},
	resolve: async (parent, args, { prisma, user }) => {
		if (!user) throw new Error();

		const record = await prisma.follow.delete({
			where: PrismaUtils.nonNull(args.where)
		});

		return { record };
	}
});
