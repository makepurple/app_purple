import { inputObjectType } from "nexus";

export const CodeLanguageNullableFilter = inputObjectType({
	name: "CodeLanguageNullableFilter",
	definition: (t) => {
		t.string("equals");
		t.list.nonNull.field("in", { type: "CodeLanguage" });
		t.field("not", { type: "CodeLanguageNullableFilter" });
		t.list.nonNull.field("notIn", { type: "CodeLanguage" });
	}
});
