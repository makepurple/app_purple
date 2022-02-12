import { inputObjectType } from "nexus";

export const SkillListRelationFilter = inputObjectType({
	name: "SkillListRelationFilter",
	definition: (t) => {
		t.field("every", { type: "SkillWhereInput" });
		t.field("none", { type: "SkillWhereInput" });
		t.field("some", { type: "SkillWhereInput" });
	}
});
