import { objectType } from "nexus";

export const UserActivityFollowSkill = objectType({
	name: "UserActivityFollowSkill",
	definition: (t) => {
		t.implements("UserActivity");
		t.nonNull.field("follow", {
			type: "Follow",
			resolve: async (parent, args, { prisma }) => {
				return await prisma.follow.findUnique({
					where: { id: parent.followId },
					rejectOnNotFound: true
				});
			}
		});
		t.nonNull.string("followId");
	}
});
