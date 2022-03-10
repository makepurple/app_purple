import { interfaceType } from "nexus";

export const UserActivity = interfaceType({
	name: "UserActivity",
	definition: (t) => {
		t.nonNull.id("id");
		t.nonNull.dateTime("updatedAt");
		t.nonNull.field("user", {
			type: "User",
			resolve: (parent, args, { prisma }) => {
				return prisma.user.findUnique({
					where: {
						id: parent.id
					},
					rejectOnNotFound: true
				});
			}
		});
		t.nonNull.string("userId");
	}
});
