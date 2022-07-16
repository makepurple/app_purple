import { objectType } from "nexus";

export const Friendship = objectType({
	name: "Friendship",
	definition: (t) => {
		t.nonNull.field("friender", {
			type: "User",
			resolve: (parent, args, { prisma }) => {
				return prisma.user.findUniqueOrThrow({
					where: {
						id: parent.frienderId
					}
				});
			}
		});
		t.nonNull.string("frienderId");
		t.nonNull.field("friending", {
			type: "User",
			resolve: (parent, args, { prisma }) => {
				return prisma.user.findUniqueOrThrow({
					where: {
						id: parent.friendingId
					}
				});
			}
		});
		t.nonNull.string("friendingId");
		t.nonNull.string("frienderId");
		t.implements("Node");
		t.nonNull.boolean("rejected", { resolve: (parent) => !!parent.rejectedAt });
		t.dateTime("rejectedAt");
		t.nonNull.dateTime("updatedAt");
	}
});
