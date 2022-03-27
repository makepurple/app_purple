import { objectType } from "nexus";

export const OpenChatPayload = objectType({
	name: "OpenChatPayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.field("record", { type: "Chat" });
	}
});
