import { objectType } from "nexus";

export const DeleteUserPayload = objectType({
	name: "DeleteUserPayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.field("record", { type: "User" });
	}
});
