import { objectType } from "nexus";

export const SuggestRepositories = objectType({
	name: "SuggestRepositories",
	definition: (t) => {
		t.nonNull.list.nonNull.field("nodes", { type: "GitHubRepository" });
		t.nonNull.int("totalCount");
	}
});
