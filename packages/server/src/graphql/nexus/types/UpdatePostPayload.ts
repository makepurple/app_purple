import { objectType } from "nexus";

export const UpdatePostPayload = objectType({
	name: "UpdatePostPayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.field("record", { type: "Post" });
	}
});
