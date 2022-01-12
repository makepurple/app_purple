import { inputObjectType } from "nexus";

export const PostUpdateInput = inputObjectType({
	name: "PostUpdateInput",
	definition: (t) => {
		t.field("content", { type: "Json" });
		t.string("description");
		t.int("readTime");
		t.list.nonNull.field("skills", { type: "SkillWhereUniqueInput" });
		t.string("thumbnailUrl");
	}
});
