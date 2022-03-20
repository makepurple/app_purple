import { objectType } from "nexus";

export const RemovePostThumbnailPayload = objectType({
	name: "RemovePostThumbnailPayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.field("record", { type: "Post" });
	}
});
