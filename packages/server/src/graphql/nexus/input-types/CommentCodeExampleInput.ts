import { inputObjectType } from "nexus";

export const CommentCodeExampleInput = inputObjectType({
	name: "CommentCodeExampleInput",
	definition: (t) => {
		t.field("codeExample", { type: "CodeExampleWhereUniqueInput" });
		t.json("content");
		t.field("parent", { type: "CommentWhereUniqueInput" });
	}
});
