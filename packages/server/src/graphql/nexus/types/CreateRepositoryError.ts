import { interfaceType } from "nexus";

export const CreateRepositoryError = interfaceType({
	name: "CreateRepositoryError",
	definition: (t) => {
		t.implements("MutationError");
	}
});
