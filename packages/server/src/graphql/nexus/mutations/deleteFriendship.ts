import { stripIndents } from "common-tags";
import { arg, mutationField, nonNull } from "nexus";
import { PrismaUtils } from "../../../utils";

export const deleteFriendship = mutationField("deleteFriendship", {
	type: nonNull("DeleteFriendshipPayload"),
	args: {
		where: nonNull(
			arg({
				type: "FriendshipWhereUniqueInput",
				description: stripIndents`
					Find friendship from viewer -> friend
				`
			})
		)
	},
	authorize: async (parent, args, { prisma, user }) => {
		if (!user) return false;

		const frienderUser = await prisma.friendship
			.findUnique({
				where: PrismaUtils.nonNull(args.where)
			})
			.friender();

		if (frienderUser?.id !== user.id) return false;

		return true;
	},
	resolve: async (parent, args, { prisma, user }) => {
		if (!user) throw new Error();

		const record = await prisma.$transaction(async (transaction) => {
			const deleted = await transaction.friendship.delete({
				where: PrismaUtils.nonNull(args.where)
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
					rejected: true
				}
			});

			return deleted;
		});

		return { record };
	}
});
