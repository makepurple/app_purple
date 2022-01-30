import { NexusPrisma } from "@makepurple/prisma/nexus";
import { interfaceType } from "nexus";

export const Notification = interfaceType({
	name: NexusPrisma.Notification.$name,
	description: NexusPrisma.Notification.$description,
	definition: (t) => {
		t.field(NexusPrisma.Notification.id);
		t.nonNull.boolean("opened", {
			resolve: async (parent, args, { prisma }) => {
				const user = await prisma.user.findUnique({
					where: {
						id: parent.userId
					}
				});

				const lastOpenedAt = user?.notificationsLastOpenedAt;

				return !!lastOpenedAt && lastOpenedAt >= parent.updatedAt;
			}
		});
		t.field(NexusPrisma.Notification.type);
		t.field(NexusPrisma.Notification.user);
		t.field(NexusPrisma.Notification.userId);
		t.field(NexusPrisma.Notification.updatedAt);
	}
});
