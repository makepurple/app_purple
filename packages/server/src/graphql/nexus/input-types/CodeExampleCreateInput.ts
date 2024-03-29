import { inputObjectType } from "nexus";

export const CodeExampleCreateInput = inputObjectType({
	name: "CodeExampleCreateInput",
	definition: (t) => {
		t.nonNull.string("content");
		t.string("description");
		t.nonNull.field("language", { type: "CodeLanguage" });
		t.field("primarySkill", { type: "SkillWhereUniqueInput" });
		t.nonNull.list.nonNull.field("skills", { type: "SkillWhereUniqueInput" });
		t.nonNull.string("title");
	}
});
