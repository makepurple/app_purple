import { objectType } from "nexus";

export const NotificationChatMessageReceived = objectType({
	name: "NotificationChatMessageReceived",
	definition: (t) => {
		t.implements("Notification");
		t.nonNull.field("chat", {
			type: "Chat",
			resolve: async (parent, args, { prisma }) => {
				return await prisma.chat.findUnique({
					where: { id: parent.chatId },
					rejectOnNotFound: true
				});
			}
		});
		t.nonNull.string("chatId");
	}
});
