import { inputObjectType } from "nexus";

export const PostWhereInput = inputObjectType({
	name: "PostWhereInput",
	definition: (t) => {
		t.field("author", { type: "UserWhereInput" });
		t.field("authorName", { type: "StringNullableFilter" });
		t.field("publishedAt", { type: "DateTimeNullableFilter" });
		t.field("skills", { type: "SkillListRelationFilter" });
		t.field("urlSlug", { type: "StringNullableFilter" });
	}
});
