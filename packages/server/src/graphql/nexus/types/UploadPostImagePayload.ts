import { objectType } from "nexus";

export const UploadPostImagePayload = objectType({
	name: "UploadPostImagePayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.nonNull.field("record", { type: "PostImage" });
	}
});
