import { inputObjectType } from "nexus";

export const NotificationsWhereInput = inputObjectType({
	name: "NotificationsWhereInput",
	definition: (t) => {
		t.boolean("opened");
		t.list.nonNull.field("type", { type: "NotificationType" });
	}
});
