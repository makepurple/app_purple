import { arg, mutationField, nonNull } from "nexus";
import { PrismaUtils } from "../../../utils";

export const deleteCodeExample = mutationField("deleteCodeExample", {
	type: nonNull("DeleteCodeExamplePayload"),
	args: {
		where: nonNull(arg({ type: "CodeExampleWhereUniqueInput" }))
	},
	authorize: async (parent, args, { prisma, user }) => {
		if (!user) return false;

		const codeExample = await prisma.codeExample.findUnique({
			where: PrismaUtils.nonNull(args.where)
		});

		if (user.name !== codeExample?.authorName) return false;

		return true;
	},
	resolve: async (parent, args, { prisma, user }) => {
		if (!user) throw new Error();

		const record = await prisma.$transaction(async (transaction) => {
			const deleted = await transaction.codeExample.delete({
				where: PrismaUtils.nonNull(args.where)
			});

			await transaction.userActivity.deleteMany({
				where: {
					codeExample: { id: { equals: deleted.id } }
				}
			});

			return deleted;
		});

		return { record };
	}
});