import { inputObjectType } from "nexus";

export const CodeLanguageNullableFilter = inputObjectType({
	name: "CodeLanguageNullableFilter",
	definition: (t) => {
		t.field("equals", { type: "CodeLanguage" });
		t.list.nonNull.field("in", { type: "CodeLanguage" });
		t.field("not", { type: "CodeLanguageNullableFilter" });
		t.list.nonNull.field("notIn", { type: "CodeLanguage" });
	}
});
