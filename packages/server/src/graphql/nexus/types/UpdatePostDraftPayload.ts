import { objectType } from "nexus";

export const UpdatePostDraftPayload = objectType({
	name: "UpdatePostDraftPayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.nonNull.field("record", { type: "Post" });
	}
});