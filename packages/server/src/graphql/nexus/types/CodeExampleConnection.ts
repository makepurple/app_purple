import { objectType } from "nexus";
import { PrismaUtils } from "../../../utils";

export const CodeExampleConnection = objectType({
	name: "CodeExampleConnection",
	definition: (t) => {
		t.implements("Connection");
		t.nonNull.list.nonNull.field("edges", { type: "CodeExampleEdge" });
		t.nonNull.list.nonNull.field("nodes", {
			type: "CodeExample",
			resolve: (parent) => PrismaUtils.mapRelayEdgesToNodes(parent.edges)
		});
	}
});
