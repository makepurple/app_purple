import { inputObjectType } from "nexus";

export const PostPublishInput = inputObjectType({
	name: "PostPublishInput",
	definition: (t) => {
		t.nonNull.field("content", { type: "Json" });
		t.nonNull.string("description");
		t.int("readTime");
		t.nonNull.list.nonNull.field("skills", { type: "SkillWhereUniqueInput" });
		t.nonNull.string("title");
		t.nonNull.string("thumbnailUrl");
	}
});
