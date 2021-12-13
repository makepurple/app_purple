import { inputObjectType } from "nexus";

export const PostUpdateInput = inputObjectType({
	name: "PostUpdateInput",
	definition: (t) => {
		t.json("content");
		t.string("description");
		t.string("thumbnailUrl");
	}
});
