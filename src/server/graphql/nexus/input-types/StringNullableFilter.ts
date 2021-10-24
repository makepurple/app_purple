import { inputObjectType } from "nexus";

export const StringNullableFilter = inputObjectType({
	name: "StringNullableFilter",
	definition: (t) => {
		t.string("equals");
		t.list.nonNull.string("in");
		t.list.nonNull.string("notIn");
		t.string("contains");
		t.string("startsWith");
		t.string("endsWith");
	}
});
