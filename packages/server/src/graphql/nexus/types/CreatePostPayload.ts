import { objectType } from "nexus";

export const CreatePostPayload = objectType({
	name: "CreatePostPayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.field("record", { type: "Post" });
	}
});
