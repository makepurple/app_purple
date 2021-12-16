import { inputObjectType } from "nexus";

export const PostDraftUpdateInput = inputObjectType({
	name: "PostDraftUpdateInput",
	definition: (t) => {
		t.field("content", { type: "Json" });
		t.string("description");
		t.string("title");
		t.string("thumbnailUrl");
	}
});
