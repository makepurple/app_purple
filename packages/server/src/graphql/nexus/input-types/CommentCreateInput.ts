import { inputObjectType } from "nexus";

export const CommentCreateInput = inputObjectType({
	name: "CommentCreateInput",
	definition: (t) => {
		t.json("content");
		t.field("parent", { type: "CommentWhereUniqueInput" });
		t.field("post", { type: "PostWhereUniqueInput" });
	}
});
