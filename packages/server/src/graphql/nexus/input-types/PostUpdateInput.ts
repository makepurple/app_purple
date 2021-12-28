import { inputObjectType } from "nexus";

export const PostUpdateInput = inputObjectType({
	name: "PostUpdateInput",
	definition: (t) => {
		t.field("content", { type: "Json" });
		t.string("description");
		t.int("readTime");
		t.string("thumbnailUrl");
	}
});
