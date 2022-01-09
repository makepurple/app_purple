import { NexusPrisma } from "@makepurple/prisma/nexus";
import { objectType } from "nexus";

export const Follow = objectType({
	name: NexusPrisma.Follow.$name,
	description: NexusPrisma.Follow.$description,
	definition: (t) => {
		t.field(NexusPrisma.Follow.id);
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
			type: "Following",
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
		t.field(NexusPrisma.Follow.createdAt);
	}
});
