import { interfaceType } from "nexus";

export const CreateCodeExampleError = interfaceType({
	name: "CreateCodeExampleError",
	definition: (t) => {
		t.implements("MutationError");
	}
});
