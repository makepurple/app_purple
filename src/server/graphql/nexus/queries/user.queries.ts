import { inputObjectType, nonNull, queryField } from "nexus";

export const userQueries = [
	inputObjectType({
		name: "UserWhereUniqueInput",
		definition: (t) => {
			t.string("id");
			t.string("name");
			t.string("email");
		}
	}),
	queryField("user", {
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
	})
];
