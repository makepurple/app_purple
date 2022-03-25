import { objectType } from "nexus";

export const RejectFriendshipPayload = objectType({
	name: "RejectFriendshipPayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.field("record", { type: "User" });
	}
});
