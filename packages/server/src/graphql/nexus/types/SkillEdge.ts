import { objectType } from "nexus";

export const SkillEdge = objectType({
	name: "SkillEdge",
	definition: (t) => {
		t.nonNull.string("cursor");
		t.nonNull.field("node", { type: "Skill" });
	}
});
