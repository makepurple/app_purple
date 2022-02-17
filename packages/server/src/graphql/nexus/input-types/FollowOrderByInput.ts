import { inputObjectType } from "nexus";

export const FollowOrderByInput = inputObjectType({
	name: "FollowOrderByInput",
	definition: (t) => {
		t.field("type", { type: "SortOrder" });
	}
});
