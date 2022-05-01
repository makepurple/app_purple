import { objectType } from "nexus";

export const UpdatePostPayload = objectType({
	name: "UpdatePostPayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.list.nonNull.field("errors", { type: "UpdatePostError" });
		t.field("record", { type: "Post" });
	}
});
