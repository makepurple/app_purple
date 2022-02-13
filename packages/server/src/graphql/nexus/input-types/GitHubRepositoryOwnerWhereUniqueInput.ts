import { inputObjectType } from "nexus";

export const GitHubRepositoryOwnerWhereUniqueInput = inputObjectType({
	name: "GitHubRepositoryOwnerWhereUniqueInput",
	definition: (t) => {
		t.nonNull.string("login");
	}
});
