import { oneLine } from "common-tags";
import { objectType } from "nexus";
import { PrismaUtils } from "../../../utils";

export const ExperienceConnection = objectType({
	name: "ExperienceConnection",
	description: oneLine`
		Relay-style connection for Experience types.
	`,
	definition: (t) => {
		t.implements("Connection");
		t.nonNull.list.nonNull.field("edges", { type: "ExperienceEdge" });
		t.nonNull.list.nonNull.field("nodes", {
			type: "Experience",
			resolve: (parent) => PrismaUtils.mapRelayEdgesToNodes(parent.edges)
		});
	}
});
