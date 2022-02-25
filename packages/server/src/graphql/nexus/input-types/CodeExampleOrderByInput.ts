import { inputObjectType } from "nexus";

export const CodeExampleOrderByInput = inputObjectType({
	name: "CodeExampleOrderByInput",
	definition: (t) => {
		t.field("authorName", { type: "SortOrder" });
		t.field("createdAt", { type: "SortOrder" });
		t.field("language", { type: "SortOrder" });
		t.field("title", { type: "SortOrder" });
		t.field("updatedAt", { type: "SortOrder" });
	}
});
