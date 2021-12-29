import { oneLine } from "common-tags";
import { objectType } from "nexus";
import { PrismaUtils } from "../../..";

export const CommentConnection = objectType({
	name: "CommentConnection",
	description: oneLine`
		Relay-style connection for Comment types.
	`,
	definition: (t) => {
		t.nonNull.list.nonNull.field("edges", { type: "CommentEdge" });
		t.nonNull.list.nonNull.field("nodes", {
			type: "Comment",
			resolve: (parent) => PrismaUtils.mapRelayEdgesToNodes(parent.edges)
		});
		t.nonNull.field("pageInfo", { type: "PageInfo" });
		t.nonNull.int("totalCount");
	}
});
