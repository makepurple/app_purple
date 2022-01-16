import { objectType } from "nexus";

export const ChatMessageEdge = objectType({
	name: "ChatMessageEdge",
	definition: (t) => {
		t.implements("ConnectionEdge");
		t.nonNull.field("node", { type: "ChatMessage" });
	}
});
