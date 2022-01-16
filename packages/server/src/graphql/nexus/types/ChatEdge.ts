import { objectType } from "nexus";

export const ChatEdge = objectType({
	name: "ChatEdge",
	definition: (t) => {
		t.implements("ConnectionEdge");
		t.nonNull.field("node", { type: "Chat" });
	}
});
