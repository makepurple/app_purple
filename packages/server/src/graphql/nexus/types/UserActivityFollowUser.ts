import { objectType } from "nexus";

export const UserActivityFollowUser = objectType({
	name: "UserActivityFollowUser",
	definition: (t) => {
		t.implements("UserActivity");
		t.nonNull.field("follow", {
			type: "Follow",
			resolve: async (parent, args, { prisma }) => {
				return await prisma.follow.findUniqueOrThrow({
					where: { id: parent.followId }
				});
			}
		});
		t.nonNull.string("followId");
	}
});
