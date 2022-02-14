import { objectType } from "nexus";
import { PrismaUtils } from "../../../utils";

export const GitHubRepositoryConnection = objectType({
	name: "GitHubRepositoryConnection",
	definition: (t) => {
		t.implements("Connection");
		t.nonNull.list.nonNull.field("edges", { type: "GitHubRepositoryEdge" });
		t.nonNull.list.nonNull.field("nodes", {
			type: "GitHubRepository",
			resolve: (parent) => PrismaUtils.mapRelayEdgesToNodes(parent.edges)
		});
	}
});
