import { interfaceType } from "nexus";

export const UserActivity = interfaceType({
	name: "UserActivity",
	definition: (t) => {
		t.implements("Node");
		t.nonNull.dateTime("updatedAt");
		t.nonNull.field("user", {
			type: "User",
			resolve: (parent, args, { prisma }) => {
				return prisma.user.findUniqueOrThrow({
					where: { id: parent.userId }
				});
			}
		});
		t.nonNull.string("userId");
	}
});
