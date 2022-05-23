import { arg, mutationField, nonNull } from "nexus";
import { PermissionUtils, PrismaUtils } from "../../../utils";

export const deleteRepository = mutationField("deleteRepository", {
	type: nonNull("DeleteRepositoryPayload"),
	args: {
		where: nonNull(arg({ type: "RepositoryWhereUniqueInput" }))
	},
	authorize: async (parent, args, { prisma, user }) => {
		if (!user) return false;

		const owner = await prisma.repository
			.findUnique({
				where: PrismaUtils.nonNull(args.where)
			})
			.user();

		if (!owner) return false;
		if (user.id === owner.id) return true;
		if (PermissionUtils.isGreaterRole(user.role, owner.role)) return true;

		return false;
	},
	resolve: async (parent, args, { prisma, res }) => {
		const record = await prisma.repository.delete({
			where: PrismaUtils.nonNull(args.where)
		});

		await res.unstable_revalidate("/leedavidcs").catch(() => null);

		return { record };
	}
});
