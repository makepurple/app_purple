import { objectType } from "nexus";

export const LeaveChatPayload = objectType({
	name: "LeaveChatPayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.field("record", { type: "Chat" });
	}
});
