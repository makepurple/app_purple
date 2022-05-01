import { objectType } from "nexus";

export const RepositoryNotFoundError = objectType({
	name: "RepositoryNotFoundError",
	definition: (t) => {
		t.implements("UpdateRepositoryError");
	}
});
