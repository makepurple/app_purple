import { objectType } from "nexus";

export const PublishPostPayload = objectType({
	name: "PublishPostPayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.nonNull.field("record", { type: "Post" });
	}
});