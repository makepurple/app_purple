import { objectType } from "nexus";

export const UserActivityEdge = objectType({
	name: "UserActivityEdge",
	definition: (t) => {
		t.implements("ConnectionEdge");
		t.nonNull.field("node", { type: "UserActivity" });
	}
});
