import { objectType } from "nexus";

export const SkillEdge = objectType({
	name: "SkillEdge",
	definition: (t) => {
		t.implements("ConnectionEdge");
		t.nonNull.field("node", { type: "Skill" });
	}
});
