import { objectType } from "nexus";

export const ViewPostPayload = objectType({
	name: "ViewPostPayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.field("record", { type: "Post" });
	}
});
