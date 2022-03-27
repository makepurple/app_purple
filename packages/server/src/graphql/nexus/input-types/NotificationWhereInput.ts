import { inputObjectType } from "nexus";

export const NotificationWhereInput = inputObjectType({
	name: "NotificationWhereInput",
	definition: (t) => {
		t.boolean("opened");
		t.list.nonNull.field("type", { type: "NotificationType" });
	}
});
