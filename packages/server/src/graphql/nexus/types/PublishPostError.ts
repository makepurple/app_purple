import { interfaceType } from "nexus";

export const PublishPostError = interfaceType({
	name: "PublishPostError",
	definition: (t) => {
		t.implements("MutationError");
	}
});
