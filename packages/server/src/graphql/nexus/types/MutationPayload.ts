import { interfaceType } from "nexus";

export const MutationPayload = interfaceType({
	name: "MutationPayload",
	definition: (t) => {
		t.field("viewer", {
			type: "User",
			resolve: async (parent, args, { prisma, user }) => {
				if (!user) return null;

				return await prisma.user.findUnique({
					where: {
						id: user.id
					}
				});
			}
		});
		t.nonNull.field("query", {
			type: "Query",
			resolve: () => ({})
		});
	}
});
