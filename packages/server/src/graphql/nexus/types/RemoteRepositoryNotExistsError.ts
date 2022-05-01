import { objectType } from "nexus";

export const RemoteRepositoryNotExistsError = objectType({
	name: "RemoteRepositoryNotExistsError",
	definition: (t) => {
		t.implements("CreateRepositoryError");
	}
});
