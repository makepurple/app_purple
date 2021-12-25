import { inputObjectType } from "nexus";

export const RepositoryCreateInput = inputObjectType({
	name: "RepositoryCreateInput",
	definition: (t) => {
		t.nonNull.string("name");
	}
});
