import { objectType } from "nexus";

export const Follow = objectType({
	name: "Follow",
	definition: (t) => {
		t.implements("Node");
		t.nonNull.field("follower", {
			type: "User",
			resolve: async (parent, args, { prisma }) => {
				const follow = await prisma.follow.findUnique({
					where: { id: parent.id },
					include: {
						followingSkill: { include: { follower: true } },
						followingUser: { include: { follower: true } }
					}
				});

				if (!follow) throw new Error();

				const follower = follow.followingSkill?.follower ?? follow.followingUser?.follower;

				if (!follower) throw new Error();

				return follower;
			}
		});
		t.nonNull.field("following", {
			type: "Followable",
			resolve: async (parent, args, { prisma }) => {
				const follow = await prisma.follow.findUnique({
					where: { id: parent.id },
					include: {
						followingSkill: { include: { following: true } },
						followingUser: { include: { following: true } }
					}
				});

				if (!follow) throw new Error();

				const skill = follow.followingSkill?.following;
				const user = follow.followingUser?.following;

				if (skill) return { __typename: "Skill", ...skill };
				if (user) return { __typename: "User", ...user };

				throw new Error();
			}
		});
		t.nonNull.dateTime("createdAt");
		t.nonNull.field("type", { type: "FollowType" });
		t.nonNull.field("user", {
			type: "User",
			resolve: (parent, args, { prisma }) => {
				return prisma.user.findUnique({
					where: {
						id: parent.userId
					},
					rejectOnNotFound: true
				});
			}
		});
		t.nonNull.string("userId");
	}
});
