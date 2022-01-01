import { objectType } from "nexus";

export const RejectFriendshipPayload = objectType({
	name: "RejectFriendshipPayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.nonNull.field("record", { type: "Friendship" });
	}
});
