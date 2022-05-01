import { objectType } from "nexus";

export const PublishPostPayload = objectType({
	name: "PublishPostPayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.list.nonNull.field("errors", { type: "PublishPostError" });
		t.field("record", { type: "Post" });
	}
});
