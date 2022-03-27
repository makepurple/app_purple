import { objectType } from "nexus";

export const OpenMessagesPayload = objectType({
	name: "OpenMessagesPayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.field("record", { type: "User" });
	}
});
