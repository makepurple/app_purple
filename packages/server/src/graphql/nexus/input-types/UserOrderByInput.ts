import { inputObjectType } from "nexus";

export const UserOrderByInput = inputObjectType({
	name: "UserOrderByInput",
	definition: (t) => {
		t.field("createdAt", { type: "SortOrder" });
		t.field("updatedAt", { type: "SortOrder" });
	}
});
