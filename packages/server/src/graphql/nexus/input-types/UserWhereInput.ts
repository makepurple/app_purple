import { inputObjectType } from "nexus";

export const UserWhereInput = inputObjectType({
	name: "UserWhereInput",
	definition: (t) => {
		t.field("id", { type: "StringNullableFilter" });
		t.field("name", { type: "StringNullableFilter" });
	}
});
