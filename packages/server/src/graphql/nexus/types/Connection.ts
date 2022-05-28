import { interfaceType } from "nexus";

export const Connection = interfaceType({
	name: "Connection",
	definition: (t) => {
		t.nonNull.list.nonNull.field("edges", { type: "ConnectionEdge" });
		t.nonNull.list.nonNull.field("nodes", {
			type: "Node",
			resolve: (parent) => {
				return parent.edges.map((edge) => edge.node);
			}
		});
		t.nonNull.field("pageInfo", { type: "PageInfo" });
		t.nonNull.int("totalCount");
	}
});
