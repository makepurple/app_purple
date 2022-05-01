import { interfaceType } from "nexus";

export const UpdatePostDraftError = interfaceType({
	name: "UpdatePostDraftError",
	definition: (t) => {
		t.implements("MutationError");
	}
});
