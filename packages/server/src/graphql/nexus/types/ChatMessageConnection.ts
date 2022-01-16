import { objectType } from "nexus";
import { PrismaUtils } from "../../../utils";

export const ChatMessageConnection = objectType({
	name: "ChatMessageConnection",
	definition: (t) => {
		t.implements("Connection");
		t.nonNull.list.nonNull.field("edges", { type: "ChatMessageEdge" });
		t.nonNull.list.nonNull.field("nodes", {
			type: "ChatMessage",
			resolve: (parent) => PrismaUtils.mapRelayEdgesToNodes(parent.edges)
		});
	}
});
