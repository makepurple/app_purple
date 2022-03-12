import { inputObjectType } from "nexus";

export const PostUpdateInput = inputObjectType({
	name: "PostUpdateInput",
	definition: (t) => {
		t.list.nonNull.json("content");
		t.string("description");
		t.int("readTime");
		t.list.nonNull.field("skills", { type: "SkillWhereUniqueInput" });
		t.string("thumbnailUrl");
	}
});
