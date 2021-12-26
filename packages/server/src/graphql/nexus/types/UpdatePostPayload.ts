import { objectType } from "nexus";

export const UpdatePostPayload = objectType({
	name: "UpdatePostPayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.nonNull.field("record", { type: "Post" });
	}
});
