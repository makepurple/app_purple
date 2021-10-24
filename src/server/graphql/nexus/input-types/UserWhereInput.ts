import { inputObjectType } from "nexus";

export const UserWhereInput = inputObjectType({
	name: "UserWhereInput",
	definition: (t) => {
		t.field("name", { type: "StringNullableFilter" });
	}
});
