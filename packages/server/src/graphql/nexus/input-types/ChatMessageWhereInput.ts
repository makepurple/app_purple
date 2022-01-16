import { inputObjectType } from "nexus";

export const ChatMessageWhereInput = inputObjectType({
	name: "ChatMessageWhereInput",
	definition: (t) => {
		t.nonNull.string("chatId");
		t.field("id", { type: "StringNullableFilter" });
	}
});
