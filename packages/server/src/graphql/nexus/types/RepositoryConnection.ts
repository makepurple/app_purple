import { oneLine } from "common-tags";
import { objectType } from "nexus";
import { PrismaUtils } from "../../../utils";

export const RepositoryConnection = objectType({
	name: "RepositoryConnection",
	description: oneLine`
		Relay-style connection for Repository types.
	`,
	definition: (t) => {
		t.nonNull.list.nonNull.field("edges", { type: "RepositoryEdge" });
		t.nonNull.list.nonNull.field("nodes", {
			type: "Repository",
			resolve: (parent) => PrismaUtils.mapRelayEdgesToNodes(parent.edges)
		});
		t.nonNull.field("pageInfo", { type: "PageInfo" });
		t.nonNull.int("totalCount");
	}
});
