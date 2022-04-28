import { arg, mutationField, nonNull } from "nexus";
import { PermissionUtils, PrismaUtils } from "../../../utils";

export const unbanUser = mutationField("unbanUser", {
	type: nonNull("UnbanUserPayload"),
	args: {
		where: nonNull(arg({ type: "UserWhereUniqueInput" }))
	},
	authorize: async (parent, args, { prisma, user }) => {
		if (!user) return false;

		const toUnban = await prisma.user.findUnique({
			where: PrismaUtils.nonNull(args.where)
		});

		if (!toUnban) return false;
		if (PermissionUtils.isGreaterRole(user.role, toUnban.role)) return true;

		return false;
	},
	resolve: async (parent, args, { prisma, user }) => {
		if (!user) throw new Error();

		const toUnban = await prisma.user.findUnique({
			where: PrismaUtils.nonNull(args.where),
			rejectOnNotFound: true
		});

		const banReason = await prisma.banReason.delete({
			where: {
				userId: toUnban.id
			},
			include: {
				user: true
			}
		});

		const record = banReason.user;

		return { record };
	}
});
