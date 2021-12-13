import { inputObjectType } from "nexus";

export const PostDraftUpdateInput = inputObjectType({
	name: "PostDraftUpdateInput",
	definition: (t) => {
		t.json("content");
		t.string("description");
		t.string("title");
		t.string("thumbnailUrl");
	}
});
