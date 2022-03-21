import { objectType } from "nexus";

export const CodeExampleTitleTakenError = objectType({
	name: "CodeExampleTitleTakenError",
	definition: (t) => {
		t.implements("MutationError");
	}
});
