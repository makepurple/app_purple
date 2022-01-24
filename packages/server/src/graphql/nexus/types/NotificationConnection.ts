import { objectType } from "nexus";
import { PrismaUtils } from "../../../utils";

export const NotificationConnection = objectType({
	name: "NotificationConnection",
	definition: (t) => {
		t.implements("Connection");
		t.nonNull.list.nonNull.field("edges", { type: "NotificationEdge" });
		t.nonNull.list.nonNull.field("nodes", {
			type: "Notification",
			resolve: (parent) => PrismaUtils.mapRelayEdgesToNodes(parent.edges)
		});
	}
});
