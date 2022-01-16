import { NexusPrisma } from "@makepurple/prisma/nexus";
import { objectType } from "nexus";

export const ChatMessage = objectType({
	name: NexusPrisma.ChatMessage.$name,
	description: NexusPrisma.ChatMessage.$description,
	definition: (t) => {
		t.field(NexusPrisma.ChatMessage.id);
		t.field(NexusPrisma.ChatMessage.chat);
		t.field(NexusPrisma.ChatMessage.chatId);
		t.field(NexusPrisma.ChatMessage.content);
		t.field(NexusPrisma.ChatMessage.sender);
		t.field(NexusPrisma.ChatMessage.senderId);
	}
});
