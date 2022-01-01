import { objectType } from "nexus";

export const AcceptFriendshipPayload = objectType({
	name: "AcceptFriendshipPayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.nonNull.field("record", { type: "Friendship" });
	}
});
