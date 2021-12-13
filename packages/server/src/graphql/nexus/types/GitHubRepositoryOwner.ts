import { interfaceType } from "nexus";

export const GitHubRepositoryOwner = interfaceType({
	name: "GitHubRepositoryOwner",
	definition: (t) => {
		t.nonNull.url("avatarUrl");
		t.nonNull.string("id");
		t.nonNull.string("login");
		t.nonNull.url("url");
	}
});
