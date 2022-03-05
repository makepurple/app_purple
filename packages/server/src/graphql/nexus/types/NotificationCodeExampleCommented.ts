import { objectType } from "nexus";

export const NotificationCodeExampleCommented = objectType({
	name: "NotificationCodeExampleCommented",
	definition: (t) => {
		t.implements("Notification");
		t.nonNull.field("codeExample", { type: "CodeExample" });
		t.nonNull.string("codeExampleId");
	}
});
