import { objectType } from "nexus";
import { PrismaUtils } from "../../../utils";

export const SkillConnection = objectType({
	name: "SkillConnection",
	definition: (t) => {
		t.implements("Connection");
		t.nonNull.list.nonNull.field("edges", { type: "SkillEdge" });
		t.nonNull.list.nonNull.field("nodes", {
			type: "Skill",
			resolve: (parent) => PrismaUtils.mapRelayEdgesToNodes(parent.edges)
		});
	}
});
