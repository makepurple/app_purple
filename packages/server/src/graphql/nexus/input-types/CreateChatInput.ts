import { inputObjectType } from "nexus";

export const CreateChatInput = inputObjectType({
	name: "CreateChatInput",
	definition: (t) => {
		t.nonNull.list.nonNull.json("message");
		t.nonNull.field("users", { type: "UserWhereInput" });
	}
});
