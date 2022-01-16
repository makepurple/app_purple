import { inputObjectType } from "nexus";

export const ChatWhereInput = inputObjectType({
	name: "ChatWhereInput",
	definition: (t) => {
		t.field("user", { type: "UserWhereInput" });
	}
});
