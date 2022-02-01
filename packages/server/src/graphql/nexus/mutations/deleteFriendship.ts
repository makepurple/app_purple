import { arg, mutationField, nonNull } from "nexus";
import { NotFoundError, PrismaUtils } from "../../../utils";

export const deleteFriendship = mutationField("deleteFriendship", {
	type: nonNull("DeleteFriendshipPayload"),
	args: {
		where: nonNull(arg({ type: "UserWhereUniqueInput" }))
	},
	authorize: (parent, args, { user }) => {
		return !!user;
	},
	resolve: async (parent, args, { prisma, user }) => {
		if (!user) throw new Error();

		const friend = await prisma.user.findUnique({
			where: PrismaUtils.nonNull(args.where)
		});

		if (!friend) throw new NotFoundError("This user does not exist");

		const record = await prisma.$transaction(async (transaction) => {
			const deleted = await transaction.friendship.delete({
				where: {
					frienderId_friendingId: {
						frienderId: user.id,
						friendingId: friend.id
					}
				}
			});

			await transaction.userActivity.deleteMany({
				where: { friendship: { id: { equals: deleted.id } } }
			});

			await transaction.friendship.update({
				where: {
					frienderId_friendingId: {
						frienderId: deleted.friendingId,
						friendingId: user.id
					}
				},
				data: {
					rejectedAt: new Date()
				}
			});

			return deleted;
		});

		return { record };
	}
});
