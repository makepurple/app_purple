import { objectType } from "nexus";

export const NotificationEdge = objectType({
	name: "NotificationEdge",
	definition: (t) => {
		t.implements("ConnectionEdge");
		t.nonNull.field("node", { type: "Notification" });
	}
});
