import { objectType } from "nexus";
import { PrismaUtils } from "../../../utils";

export const UserActivityConnection = objectType({
	name: "UserActivityConnection",
	definition: (t) => {
		t.implements("Connection");
		t.nonNull.list.nonNull.field("edges", { type: "UserActivityEdge" });
		t.nonNull.list.nonNull.field("nodes", {
			type: "UserActivity",
			resolve: (parent) => PrismaUtils.mapRelayEdgesToNodes(parent.edges)
		});
	}
});
