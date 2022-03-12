import { inputObjectType } from "nexus";

export const CommentUpdateInput = inputObjectType({
	name: "CommentUpdateInput",
	definition: (t) => {
		t.list.nonNull.json("content");
	}
});
