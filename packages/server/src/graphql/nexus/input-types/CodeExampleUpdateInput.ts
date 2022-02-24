import { inputObjectType } from "nexus";

export const CodeExampleUpdateInput = inputObjectType({
	name: "CodeExampleUpdateInput",
	definition: (t) => {
		t.string("content");
		t.string("description");
		t.field("language", { type: "CodeLanguage" });
		t.list.nonNull.field("skills", { type: "SkillWhereUniqueInput" });
		t.string("title");
	}
});
