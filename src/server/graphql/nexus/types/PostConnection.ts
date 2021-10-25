import { PrismaUtils } from "@/server/utils";
import { oneLine } from "common-tags";
import { objectType } from "nexus";

export const PostConnection = objectType({
	name: "PostConnection",
	description: oneLine`
		Relay-style connection for Post types.
	`,
	definition: (t) => {
		t.nonNull.list.nonNull.field("edges", { type: "PostEdge" });
		t.nonNull.field("pageInfo", { type: "PageInfo" });
		t.nonNull.list.nonNull.field("nodes", {
			type: "Post",
			resolve: (parent) => PrismaUtils.mapRelayEdgesToNodes(parent.edges)
		});
		t.nonNull.int("totalCount");
	}
});
