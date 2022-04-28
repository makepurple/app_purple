import { objectType } from "nexus";

export const BanReason = objectType({
	name: "BanReason",
	definition: (t) => {
		t.implements("Node");
		t.field("bannedBy", {
			type: "User",
			resolve: async (parent, args, { prisma }) => {
				return await prisma.user.findUnique({
					where: { id: parent.id }
				});
			}
		});
		t.string("bannedById");
		t.nonNull.dateTime("createdAt");
		t.nonNull.string("reason");
		t.nonNull.dateTime("updatedAt");
		t.nonNull.field("user", {
			type: "User",
			resolve: async (parent, args, { prisma }) => {
				return await prisma.user.findUnique({
					where: { id: parent.id },
					rejectOnNotFound: true
				});
			}
		});
		t.nonNull.string("userId");
	}
});
