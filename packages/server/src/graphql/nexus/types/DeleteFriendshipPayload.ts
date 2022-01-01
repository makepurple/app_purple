import { objectType } from "nexus";

export const DeleteFriendshipPayload = objectType({
	name: "DeleteFriendshipPayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.nonNull.field("record", { type: "Friendship" });
	}
});
