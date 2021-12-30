import { oneLine } from "common-tags";
import { objectType } from "nexus";
import { PrismaUtils } from "../../../utils";

export const PostConnection = objectType({
	name: "PostConnection",
	description: oneLine`
		Relay-style connection for Post types.
	`,
	definition: (t) => {
		t.implements("Connection");
		t.nonNull.list.nonNull.field("edges", { type: "PostEdge" });
		t.nonNull.list.nonNull.field("nodes", {
			type: "Post",
			resolve: (parent) => PrismaUtils.mapRelayEdgesToNodes(parent.edges)
		});
	}
});
