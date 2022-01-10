import { arg, mutationField, nonNull } from "nexus";
import { NotFoundError, PrismaUtils } from "../../../utils";

export const unfollowUser = mutationField("unfollowUser", {
	type: nonNull("UnfollowUserPayload"),
	args: {
		where: nonNull(arg({ type: "UserWhereUniqueInput" }))
	},
	authorize: (parent, args, { user }) => {
		return !!user;
	},
	resolve: async (parent, args, { prisma, user }) => {
		if (!user) throw new Error();

		const following = await prisma.user.findUnique({
			where: PrismaUtils.nonNull(args.where)
		});

		if (!following) throw new NotFoundError("This user does not exist.");

		const follow = await prisma.followUser
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
			const deleted = await transaction.follow.delete({
				where: {
					id: follow.id
				}
			});

			await transaction.userActivity.deleteMany({
				where: { follow: { id: { equals: deleted.id } } }
			});

			return deleted;
		});

		return { record };
	}
});
