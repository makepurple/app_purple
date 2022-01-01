import { NexusPrisma } from "@makepurple/prisma/nexus";
import { objectType } from "nexus";

export const Friendship = objectType({
	name: NexusPrisma.Friendship.$name,
	description: NexusPrisma.Friendship.$description,
	definition: (t) => {
		t.field(NexusPrisma.Friendship.friender);
		t.field(NexusPrisma.Friendship.frienderId);
		t.field(NexusPrisma.Friendship.friending);
		t.field(NexusPrisma.Friendship.friendingId);
		t.field(NexusPrisma.Friendship.id);
		t.field(NexusPrisma.Friendship.updatedAt);
	}
});
