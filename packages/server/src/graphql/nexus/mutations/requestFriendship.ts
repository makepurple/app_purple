import { dayjs } from "@makepurple/utils";
import { arg, mutationField, nonNull } from "nexus";
import { NotFoundError, PrismaUtils } from "../../../utils";

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
			select: { id: true }
		});

		if (!toFriend) throw new NotFoundError("User could not be found");

		const existing = await prisma.friendship.findUnique({
			where: {
				frienderId_friendingId: {
					frienderId: user.id,
					friendingId: toFriend.id
				}
			}
		});

		if (existing?.rejectedAt && existing.rejectedAt > dayjs().subtract(6, "months").toDate()) {
			return { record: existing };
		}

		const record = await prisma.$transaction(async (transaction) => {
			return await transaction.friendship.upsert({
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
			});
		});

		return { record };
	}
});
