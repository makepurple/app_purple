import { inputObjectType } from "nexus";

export const PostPublishInput = inputObjectType({
	name: "PostPublishInput",
	definition: (t) => {
		t.json("content");
		t.string("description");
		t.string("title");
		t.string("thumbnailUrl");
	}
});
