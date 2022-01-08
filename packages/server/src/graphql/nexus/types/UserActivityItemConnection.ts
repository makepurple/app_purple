import { objectType } from "nexus";

export const UserActivityItemConnection = objectType({
	name: "UserActivityItemConnection",
	definition: (t) => {
		t.implements("Connection");
		t.nonNull.list.nonNull.field("edges", { type: "UserActivityItemEdge" });
		t.nonNull.list.nonNull.field("nodes", { type: "UserActivityItem" });
	}
});
