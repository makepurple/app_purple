import { inputObjectType } from "nexus";

export const CommentWhereInput = inputObjectType({
	name: "CommentWhereInput",
	definition: (t) => {
		t.field("author", { type: "UserWhereInput" });
		t.field("authorId", { type: "StringNullableFilter" });
		t.field("createdAt", { type: "DateTimeNullableFilter" });
		t.field("updatedAt", { type: "DateTimeNullableFilter" });
	}
});
