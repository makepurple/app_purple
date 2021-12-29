import { inputObjectType } from "nexus";

export const CommentOrderByInput = inputObjectType({
	name: "CommentOrderByInput",
	definition: (t) => {
		t.field("createdAt", { type: "SortOrder" });
		t.field("updatedAt", { type: "SortOrder" });
	}
});
