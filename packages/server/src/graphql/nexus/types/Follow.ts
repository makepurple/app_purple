import { NexusPrisma } from "@makepurple/prisma/nexus";
import { objectType } from "nexus";

export const Follow = objectType({
	name: NexusPrisma.Follow.$name,
	description: NexusPrisma.Follow.$description,
	definition: (t) => {
		t.field(NexusPrisma.Follow.follower);
		t.field(NexusPrisma.Follow.followerId);
		t.field(NexusPrisma.Follow.following);
		t.field(NexusPrisma.Follow.followingId);
		t.field(NexusPrisma.Follow.id);
		t.field(NexusPrisma.Follow.updatedAt);
	}
});
