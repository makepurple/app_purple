import { objectType } from "nexus";

export const DeletePostPayload = objectType({
	name: "DeletePostPayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.field("record", { type: "Post" });
	}
});
