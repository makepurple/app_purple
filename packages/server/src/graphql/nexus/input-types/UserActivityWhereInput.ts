import { inputObjectType } from "nexus";

export const UserActivityWhereInput = inputObjectType({
	name: "UserActivityWhereInput",
	definition: (t) => {
		t.field("type", { type: "UserActivityType" });
		t.field("user", { type: "UserWhereInput" });
	}
});
