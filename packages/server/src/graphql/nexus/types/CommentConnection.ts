import { oneLine } from "common-tags";
import { objectType } from "nexus";
import { PrismaUtils } from "../../../utils";

export const CommentConnection = objectType({
	name: "CommentConnection",
	description: oneLine`
		Relay-style connection for Comment types.
	`,
	definition: (t) => {
		t.implements("Connection");
		t.nonNull.list.nonNull.field("edges", { type: "CommentEdge" });
		t.nonNull.list.nonNull.field("nodes", {
			type: "Comment",
			resolve: (parent) => PrismaUtils.mapRelayEdgesToNodes(parent.edges)
		});
	}
});
