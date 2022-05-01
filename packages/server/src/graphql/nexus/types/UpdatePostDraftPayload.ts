import { objectType } from "nexus";

export const UpdatePostDraftPayload = objectType({
	name: "UpdatePostDraftPayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.list.nonNull.field("errors", { type: "UpdatePostDraftError" });
		t.field("record", { type: "Post" });
	}
});
