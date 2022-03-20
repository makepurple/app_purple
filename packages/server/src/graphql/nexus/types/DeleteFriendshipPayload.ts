import { objectType } from "nexus";

export const DeleteFriendshipPayload = objectType({
	name: "DeleteFriendshipPayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.field("record", { type: "Friendship" });
	}
});
