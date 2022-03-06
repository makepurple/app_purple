import { objectType } from "nexus";

export const DeleteUserPayload = objectType({
	name: "DeleteUserPayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.nonNull.field("record", { type: "User" });
	}
});
