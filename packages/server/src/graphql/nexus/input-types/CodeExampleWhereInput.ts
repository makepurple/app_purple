import { inputObjectType } from "nexus";

export const CodeExampleWhereInput = inputObjectType({
	name: "CodeExampleWhereInput",
	definition: (t) => {
		t.field("authorName", { type: "StringNullableFilter" });
		t.field("createdAt", { type: "DateTimeNullableFilter" });
		t.field("language", { type: "CodeLanguageNullableFilter" });
		t.field("title", { type: "StringNullableFilter" });
		t.field("updatedAt", { type: "DateTimeNullableFilter" });
		t.field("urlSlug", { type: "StringNullableFilter" });
	}
});
