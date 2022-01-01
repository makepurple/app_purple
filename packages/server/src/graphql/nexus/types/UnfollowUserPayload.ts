import { objectType } from "nexus";

export const UnfollowUserPayload = objectType({
	name: "UnfollowUserPayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.nonNull.field("record", { type: "Follow" });
	}
});
