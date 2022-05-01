import { interfaceType } from "nexus";

export const CreatePostError = interfaceType({
	name: "CreatePostError",
	definition: (t) => {
		t.implements("MutationError");
	}
});
