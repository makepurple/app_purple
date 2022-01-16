import { inputObjectType } from "nexus";

export const ChatWhereUniqueInput = inputObjectType({
	name: "ChatWhereUniqueInput",
	definition: (t) => {
		t.string("id");
	}
});
