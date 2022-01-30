import { objectType } from "nexus";

export const OpenNotificationsPayload = objectType({
	name: "OpenNotificationsPayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.nonNull.field("record", { type: "User" });
	}
});
