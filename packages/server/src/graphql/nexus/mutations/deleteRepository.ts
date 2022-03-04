import { arg, mutationField, nonNull } from "nexus";
import { PrismaUtils } from "../../../utils";

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

		if (user.id !== owner?.id) return false;

		return true;
	},
	resolve: async (parent, args, { prisma }) => {
		const record = await prisma.repository.delete({
			where: PrismaUtils.nonNull(args.where)
		});

		return { record };
	}
});
