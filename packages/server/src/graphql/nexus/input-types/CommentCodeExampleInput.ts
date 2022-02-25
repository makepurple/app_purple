import { inputObjectType } from "nexus";

export const CommentCodeExampleInput = inputObjectType({
	name: "CommentCodeExampleInput",
	definition: (t) => {
		t.nonNull.field("codeExample", { type: "CodeExampleWhereUniqueInput" });
		t.nonNull.json("content");
		t.field("parent", { type: "CommentWhereUniqueInput" });
	}
});
