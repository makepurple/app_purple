import { inputObjectType } from "nexus";

export const RepositoryWhereInput = inputObjectType({
	name: "RepositoryWhereInput",
	definition: (t) => {
		t.field("name", { type: "StringNullableFilter" });
		t.field("user", { type: "UserWhereInput" });
		t.field("owner", { type: "StringNullableFilter" });
	}
});
