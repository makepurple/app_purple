import { inputObjectType } from "nexus";

export const SkillWhereInput = inputObjectType({
	name: "SkillWhereInput",
	definition: (t) => {
		t.list.nonNull.field("AND", { type: "SkillWhereInput" });
		t.field("name", { type: "StringNullableFilter" });
		t.list.nonNull.field("NOT", { type: "SkillWhereInput" });
		t.field("owner", { type: "StringNullableFilter" });
	}
});
