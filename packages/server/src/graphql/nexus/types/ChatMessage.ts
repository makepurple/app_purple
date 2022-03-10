import { objectType } from "nexus";

export const ChatMessage = objectType({
	name: "ChatMessage",
	definition: (t) => {
		t.nonNull.id("id");
		t.nonNull.field("chat", {
			type: "Chat",
			resolve: (parent, args, { prisma }) => {
				return prisma.chat.findUnique({
					where: {
						id: parent.chatId
					},
					rejectOnNotFound: true
				});
			}
		});
		t.nonNull.string("chatId");
		t.nonNull.json("content");
		t.nonNull.dateTime("createdAt");
		t.nonNull.field("sender", {
			type: "User",
			resolve: (parent, args, { prisma }) => {
				return prisma.user.findUnique({
					where: {
						id: parent.senderId
					},
					rejectOnNotFound: true
				});
			}
		});
		t.nonNull.string("senderId");
	}
});
