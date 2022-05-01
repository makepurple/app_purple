import { interfaceType } from "nexus";

export const UpdatePostError = interfaceType({
	name: "UpdatePostError",
	definition: (t) => {
		t.implements("MutationError");
	}
});
