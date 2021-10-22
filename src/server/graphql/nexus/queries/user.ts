import { nonNull, queryField } from "nexus";

export const user = queryField("user", {
	type: "User",
	args: {
		where: nonNull("UserWhereUniqueInput")
	},
	resolve: (parent, { where }, { prisma }) => {
		return prisma.user.findUnique({
			where: {
				id: where.id ?? undefined,
				name: where.name ?? undefined,
				email: where.email ?? undefined
			}
		});
	}
});
