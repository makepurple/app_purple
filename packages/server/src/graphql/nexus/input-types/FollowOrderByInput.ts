import { inputObjectType } from "nexus";

export const FollowOrderByInput = inputObjectType({
	name: "FollowOrderByInput",
	definition: (t) => {
		t.field("createdAt", { type: "SortOrder" });
		t.field("type", { type: "SortOrder" });
	}
});
