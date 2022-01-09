import { objectType } from "nexus";
import { PrismaUtils } from "../../../utils";

export const FollowConnection = objectType({
	name: "FollowConnection",
	definition: (t) => {
		t.implements("Connection");
		t.nonNull.list.nonNull.field("edges", { type: "FollowEdge" });
		t.nonNull.list.nonNull.field("nodes", {
			type: "Follow",
			resolve: (parent) => PrismaUtils.mapRelayEdgesToNodes(parent.edges)
		});
	}
});
