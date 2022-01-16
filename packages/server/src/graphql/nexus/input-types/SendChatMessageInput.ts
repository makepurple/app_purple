import { inputObjectType } from "nexus";

export const SendChatMessageInput = inputObjectType({
	name: "SendChatMessageInput",
	definition: (t) => {
		t.nonNull.list.nonNull.field("messages", {
			type: "ChatMessageCreateInput"
		});
	}
});
