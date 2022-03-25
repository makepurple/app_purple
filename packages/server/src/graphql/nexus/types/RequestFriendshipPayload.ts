import { objectType } from "nexus";

export const RequestFriendshipPayload = objectType({
	name: "RequestFriendshipPayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.field("record", { type: "User" });
	}
});
