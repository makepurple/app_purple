import { inputObjectType } from "nexus";

export const PostPublishInput = inputObjectType({
	name: "PostPublishInput",
	definition: (t) => {
		t.field("content", { type: "Json" });
		t.string("description");
		t.string("title");
		t.string("thumbnailUrl");
	}
});
