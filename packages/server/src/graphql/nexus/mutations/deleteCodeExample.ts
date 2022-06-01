import { arg, mutationField, nonNull } from "nexus";
import { PermissionUtils, PrismaUtils } from "../../../utils";

export const deleteCodeExample = mutationField("deleteCodeExample", {
	type: nonNull("DeleteCodeExamplePayload"),
	args: {
		where: nonNull(arg({ type: "CodeExampleWhereUniqueInput" }))
	},
	authorize: async (parent, args, { prisma, user }) => {
		if (!user) return false;

		const author = await prisma.codeExample
			.findUnique({
				where: PrismaUtils.nonNull(args.where)
			})
			.author();

		if (!author) return false;
		if (user.id === author.id) return true;
		if (PermissionUtils.isGreaterRole(user.role, author.role)) return true;

		return false;
	},
	resolve: async (parent, args, { graphcdn, prisma, res, user }) => {
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

		await graphcdn.purge`
			mutation($codeExampleId: ID!, $userId: ID!) {
				purgeCodeExample(id: $codeExampleId)
				purgeUser(id: $userId)
			}
		`({
			codeExampleId: record.id,
			userId: user.id
		});

		await res.unstable_revalidate(`/${user.name}`).catch(() => null);
		await res.unstable_revalidate(`/${user.name}/snippets`).catch(() => null);
		await res.unstable_revalidate(`/${user.name}/snippets/${record.urlSlug}`).catch(() => null);

		return { record };
	}
});
