import { objectType } from "nexus";

export const CodeExampleNotFoundError = objectType({
	name: "CodeExampleNotFoundError",
	definition: (t) => {
		t.implements("UpdateCodeExampleError");
	}
});
