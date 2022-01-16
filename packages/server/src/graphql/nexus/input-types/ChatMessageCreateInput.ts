import { inputObjectType } from "nexus";

export const ChatMessageCreateInput = inputObjectType({
	name: "ChatMessageCreateInput",
	definition: (t) => {
		t.nonNull.json("content");
	}
});
