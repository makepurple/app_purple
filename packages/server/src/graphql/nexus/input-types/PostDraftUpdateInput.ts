import { inputObjectType } from "nexus";

export const PostDraftUpdateInput = inputObjectType({
	name: "PostDraftUpdateInput",
	definition: (t) => {
		t.field("content", { type: "Json" });
		t.string("description");
		t.nonNull.list.nonNull.field("skills", { type: "SkillWhereUniqueInput" });
		t.string("title");
		t.string("thumbnailUrl");
	}
});
