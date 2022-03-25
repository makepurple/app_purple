import { arg, mutationField, nonNull } from "nexus";
import { NotFoundError, PrismaUtils } from "../../../utils";

export const rejectFriendship = mutationField("rejectFriendship", {
	type: nonNull("RejectFriendshipPayload"),
	args: {
		where: nonNull(arg({ type: "UserWhereUniqueInput" }))
	},
	authorize: (parent, args, { user }) => {
		return !!user;
	},
	resolve: async (parent, args, { prisma, user }) => {
		if (!user) throw new Error();

		const requester = await prisma.user.findUnique({
			where: PrismaUtils.nonNull(args.where)
		});

		if (!requester) throw new NotFoundError("This user does not exist");

		const record = await prisma.friendship
			.update({
				where: {
					frienderId_friendingId: {
						frienderId: requester.id,
						friendingId: user.id
					}
				},
				data: {
					rejectedAt: new Date()
				}
			})
			.friending();

		return { record };
	}
});
