import { arg, mutationField, nonNull } from "nexus";
import { PermissionUtils, PrismaUtils } from "../../../utils";

export const banUser = mutationField("banUser", {
	type: nonNull("BanUserPayload"),
	args: {
		data: nonNull(arg({ type: "BanUserInput" })),
		where: nonNull(arg({ type: "UserWhereUniqueInput" }))
	},
	authorize: async (parent, args, { prisma, user }) => {
		if (!user) return false;

		const toBan = await prisma.user.findUnique({
			where: PrismaUtils.nonNull(args.where)
		});

		if (!toBan) return false;
		if (PermissionUtils.isGreaterRole(user.role, toBan.role)) return true;

		return false;
	},
	resolve: async (parent, args, { prisma, user }) => {
		if (!user) throw new Error();

		const banReason = await prisma.banReason.create({
			data: {
				bannedBy: { connect: { id: user.id } },
				reason: args.data.reason,
				user: { connect: PrismaUtils.nonNull(args.where) }
			},
			include: {
				user: true
			}
		});

		const record = banReason.user;

		return { record };
	}
});
