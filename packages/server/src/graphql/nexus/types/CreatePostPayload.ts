import { objectType } from "nexus";

export const CreatePostPayload = objectType({
	name: "CreatePostPayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.nonNull.field("record", { type: "Post" });
	}
});
