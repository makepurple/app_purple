import { objectType } from "nexus";

export const CreateChatPayload = objectType({
	name: "CreateChatPayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.nonNull.field("record", { type: "Chat" });
	}
});
