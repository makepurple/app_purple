import { inputObjectType } from "nexus";

export const PostWhereInput = inputObjectType({
	name: "PostWhereInput",
	definition: (t) => {
		t.string("authorId");
	}
});
