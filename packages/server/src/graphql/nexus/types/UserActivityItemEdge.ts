import { objectType } from "nexus";

export const UserActivityItemEdge = objectType({
	name: "UserActivityItemEdge",
	definition: (t) => {
		t.nonNull.string("cursor");
		t.nonNull.field("node", { type: "UserActivityItem" });
	}
});
