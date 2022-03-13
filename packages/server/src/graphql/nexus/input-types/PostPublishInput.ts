import { inputObjectType } from "nexus";

export const PostPublishInput = inputObjectType({
	name: "PostPublishInput",
	definition: (t) => {
		t.nonNull.list.nonNull.json("content");
		t.nonNull.string("description");
		t.nonNull.list.nonNull.field("skills", { type: "SkillWhereUniqueInput" });
		t.nonNull.string("title");
		t.nonNull.string("thumbnailUrl");
	}
});
