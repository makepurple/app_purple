import { NexusPrisma } from "@makepurple/prisma/nexus";
import { interfaceType } from "nexus";

export const Notification = interfaceType({
	name: NexusPrisma.Notification.$name,
	description: NexusPrisma.Notification.$description,
	definition: (t) => {
		t.field(NexusPrisma.Notification.id);
		t.field(NexusPrisma.Notification.type);
		t.field(NexusPrisma.Notification.user);
		t.field(NexusPrisma.Notification.userId);
		t.field(NexusPrisma.Notification.updatedAt);
	}
});
