import { inputObjectType } from "nexus";

export const PostDraftUpdateInput = inputObjectType({
	name: "PostDraftUpdateInput",
	definition: (t) => {
		t.list.nonNull.json("content");
		t.string("description");
		t.list.nonNull.field("skills", { type: "SkillWhereUniqueInput" });
		t.string("title");
		t.string("thumbnailUrl");
	}
});
