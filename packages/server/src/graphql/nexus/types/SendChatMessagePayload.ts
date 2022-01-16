import { objectType } from "nexus";

export const SendChatMessagePayload = objectType({
	name: "SendChatMessagePayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.nonNull.field("record", { type: "Chat" });
	}
});
