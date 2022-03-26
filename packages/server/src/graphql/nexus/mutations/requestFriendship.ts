import { dayjs } from "@makepurple/utils";
import { arg, mutationField, nonNull } from "nexus";
import { PrismaUtils } from "../../../utils";

export const requestFriendship = mutationField("requestFriendship", {
	type: nonNull("RequestFriendshipPayload"),
	args: {
		where: nonNull(arg({ type: "UserWhereUniqueInput" }))
	},
	authorize: (parent, args, { user }) => {
		return !!user;
	},
	resolve: async (parent, args, { prisma, user }) => {
		if (!user) throw new Error();

		const toFriend = await prisma.user.findUnique({
			where: PrismaUtils.nonNull(args.where),
			rejectOnNotFound: true
		});

		if (toFriend.name === user.name) throw new Error("Cannot friend yourself!");

		const existing = await prisma.friendship.findUnique({
			where: {
				frienderId_friendingId: {
					frienderId: user.id,
					friendingId: toFriend.id
				}
			},
			include: {
				friending: true
			}
		});

		if (existing?.rejectedAt && dayjs().diff(dayjs(existing.rejectedAt), "months") <= 6) {
			/**
			 * @description Prevent friend requesting the same user, but return the requested
			 * user, so that the requester assumes the request goes through (disincentivizes
			 * requesting again)
			 * @author David Lee
			 * @date March 26, 2022
			 */
			return { record: existing.friending };
		}

		const record = await prisma.$transaction(async (transaction) => {
			return await transaction.friendship
				.upsert({
					where: {
						frienderId_friendingId: {
							frienderId: user.id,
							friendingId: toFriend.id
						}
					},
					create: {
						friender: { connect: { id: user.id } },
						friending: { connect: PrismaUtils.nonNull(args.where) }
					},
					update: {
						rejectedAt: { set: null }
					}
				})
				.friending();
		});

		return { record };
	}
});
