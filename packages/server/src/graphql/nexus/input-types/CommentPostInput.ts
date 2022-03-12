import { inputObjectType } from "nexus";

export const CommentPostInput = inputObjectType({
	name: "CommentPostInput",
	definition: (t) => {
		t.nonNull.list.nonNull.json("content");
		t.field("parent", { type: "CommentWhereUniqueInput" });
		t.nonNull.field("post", { type: "PostWhereUniqueInput" });
	}
});
