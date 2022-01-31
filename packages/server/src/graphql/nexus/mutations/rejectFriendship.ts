import { stripIndents } from "common-tags";
import { arg, mutationField, nonNull } from "nexus";
import { PrismaUtils } from "../../../utils";

export const rejectFriendship = mutationField("rejectFriendship", {
	type: nonNull("RejectFriendshipPayload"),
	args: {
		where: nonNull(
			arg({
				type: "FriendshipWhereUniqueInput",
				description: stripIndents`
					Find friendship from requester -> viewer
				`
			})
		)
	},
	authorize: async (parent, args, { prisma, user }) => {
		if (!user) return false;

		const friendingUser = await prisma.friendship
			.findUnique({
				where: PrismaUtils.nonNull(args.where)
			})
			.friending();

		if (friendingUser?.id !== user.id) return false;

		return true;
	},
	resolve: async (parent, args, { prisma, user }) => {
		if (!user) throw new Error();

		const record = await prisma.friendship.update({
			where: PrismaUtils.nonNull(args.where),
			data: {
				rejectedAt: new Date()
			}
		});

		return { record };
	}
});
