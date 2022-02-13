import { inputObjectType } from "nexus";

export const GitHubRepositoryWhereUniqueInput = inputObjectType({
	name: "GitHubRepositoryWhereUniqueInput",
	definition: (t) => {
		t.nonNull.string("name");
		t.nonNull.string("owner");
	}
});
