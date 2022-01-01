import { inputObjectType } from "nexus";

export const SkillWhereInput = inputObjectType({
	name: "SkillWhereInput",
	definition: (t) => {
		t.list.nonNull.field("AND", { type: "SkillWhereInput" });
		t.field("name", { type: "StringNullableFilter" });
		t.field("owner", { type: "StringNullableFilter" });
	}
});
