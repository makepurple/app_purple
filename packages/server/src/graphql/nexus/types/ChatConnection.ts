import { objectType } from "nexus";
import { PrismaUtils } from "../../../utils";

export const ChatConnection = objectType({
	name: "ChatConnection",
	definition: (t) => {
		t.implements("Connection");
		t.nonNull.list.nonNull.field("edges", { type: "ChatEdge" });
		t.nonNull.list.nonNull.field("nodes", {
			type: "Chat",
			resolve: (parent) => PrismaUtils.mapRelayEdgesToNodes(parent.edges)
		});
	}
});
