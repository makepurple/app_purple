import { interfaceType } from "nexus";

export const Notification = interfaceType({
	name: "Notification",
	definition: (t) => {
		t.implements("Node");
		t.nonNull.boolean("opened", {
			resolve: async (parent, args, { prisma }) => {
				const lastOpenedAt = await prisma.user
					.findUnique({
						where: { id: parent.userId },
						select: { notificationsLastOpenedAt: true }
					})
					.then((result) => result?.notificationsLastOpenedAt);

				return !!lastOpenedAt && lastOpenedAt >= parent.updatedAt;
			}
		});
		t.nonNull.field("type", { type: "NotificationType" });
		t.nonNull.field("user", {
			type: "User",
			resolve: (parent, args, { prisma }) => {
				return prisma.user.findUniqueOrThrow({
					where: {
						id: parent.userId
					}
				});
			}
		});
		t.nonNull.string("userId");
		t.nonNull.dateTime("updatedAt");
	}
});
