import { objectType } from "nexus";

export const FollowEdge = objectType({
	name: "FollowEdge",
	definition: (t) => {
		t.nonNull.string("cursor");
		t.nonNull.field("node", { type: "Follow" });
	}
});
