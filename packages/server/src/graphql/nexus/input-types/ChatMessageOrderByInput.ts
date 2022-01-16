import { inputObjectType } from "nexus";

export const ChatMessageOrderByInput = inputObjectType({
	name: "ChatMessageOrderByInput",
	definition: (t) => {
		t.field("createdAt", { type: "SortOrder" });
	}
});
