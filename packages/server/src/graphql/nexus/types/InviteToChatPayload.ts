import { objectType } from "nexus";

export const InviteToChatPayload = objectType({
	name: "InviteToChatPayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.field("record", { type: "Chat" });
	}
});
