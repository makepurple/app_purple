import { objectType } from "nexus";

export const NotificationChatMessageReceived = objectType({
	name: "NotificationChatMessageReceived",
	definition: (t) => {
		t.implements("Notification");
		t.nonNull.field("chat", { type: "Chat" });
		t.nonNull.string("chatId");
	}
});
