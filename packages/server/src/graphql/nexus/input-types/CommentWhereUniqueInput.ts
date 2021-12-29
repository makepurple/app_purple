import { inputObjectType } from "nexus";

export const CommentWhereUniqueInput = inputObjectType({
	name: "CommentWhereUniqueInput",
	definition: (t) => {
		t.int("id");
	}
});
