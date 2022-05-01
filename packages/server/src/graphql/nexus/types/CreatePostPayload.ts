import { objectType } from "nexus";

export const CreatePostPayload = objectType({
	name: "CreatePostPayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.list.nonNull.field("errors", { type: "CreatePostError" });
		t.field("record", { type: "Post" });
	}
});
