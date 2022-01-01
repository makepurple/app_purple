import { objectType } from "nexus";

export const FollowUserPayload = objectType({
	name: "FollowUserPayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.nonNull.field("record", { type: "Follow" });
	}
});
