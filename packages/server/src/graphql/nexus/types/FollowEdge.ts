import { objectType } from "nexus";

export const FollowEdge = objectType({
	name: "FollowEdge",
	definition: (t) => {
		t.implements("ConnectionEdge");
		t.nonNull.field("node", { type: "Follow" });
	}
});
