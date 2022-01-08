import { NexusPrisma } from "@makepurple/prisma/nexus";
import { interfaceType } from "nexus";

export const UserActivity = interfaceType({
	name: NexusPrisma.UserActivity.$name,
	description: NexusPrisma.UserActivity.$description,
	definition: (t) => {
		t.field(NexusPrisma.UserActivity.createdAt);
		t.field(NexusPrisma.UserActivity.id);
		t.field(NexusPrisma.UserActivity.user);
		t.field(NexusPrisma.UserActivity.userId);
	}
});
