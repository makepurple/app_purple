import { oneLine } from "common-tags";
import { objectType } from "nexus";
import { PrismaUtils } from "../../../utils";

export const UserConnection = objectType({
	name: "UserConnection",
	description: oneLine`
		Relay-style connection for User types.
	`,
	definition: (t) => {
		t.implements("Connection");
		t.nonNull.list.nonNull.field("edges", { type: "UserEdge" });
		t.nonNull.list.nonNull.field("nodes", {
			type: "User",
			resolve: (parent) => PrismaUtils.mapRelayEdgesToNodes(parent.edges)
		});
	}
});
