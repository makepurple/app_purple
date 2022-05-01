import { interfaceType } from "nexus";

export const UpdateCodeExampleError = interfaceType({
	name: "UpdateCodeExampleError",
	definition: (t) => {
		t.implements("MutationError");
	}
});
