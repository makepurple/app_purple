import { interfaceType } from "nexus";

export const UpdateRepositoryError = interfaceType({
	name: "UpdateRepositoryError",
	definition: (t) => {
		t.implements("MutationError");
	}
});
