import { inputObjectType } from "nexus";

export const InviteToChatInput = inputObjectType({
	name: "InviteToChatInput",
	definition: (t) => {
		t.nonNull.field("users", { type: "UserWhereInput" });
	}
});
