import { objectType } from "nexus";

export const SuggestSkillOwners = objectType({
	name: "SuggestSkillOwners",
	definition: (t) => {
		t.nonNull.list.nonNull.field("nodes", { type: "GitHubRepositoryOwner" });
		t.nonNull.int("totalCount");
	}
});
