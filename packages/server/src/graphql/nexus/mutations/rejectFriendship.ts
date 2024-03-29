import { UserActivityType } from "@prisma/client";
import { arg, mutationField, nonNull } from "nexus";
import { PrismaUtils } from "../../../utils";

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

		if (!requester) throw new Error("This user does not exist");

		const record = await prisma.friendship
			.update({
				where: {
					frienderId_friendingId: {
						frienderId: requester.id,
						friendingId: user.id
					}
				},
				data: {
					activities: {
						deleteMany: {
							type: UserActivityType.FriendAcceptUser
						}
					},
					rejectedAt: new Date()
				}
			})
			.friending();

		return { record };
	}
});
