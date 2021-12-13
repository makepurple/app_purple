import { objectType } from "nexus";

export const SuggestSkills = objectType({
	name: "SuggestSkills",
	definition: (t) => {
		t.nonNull.list.nonNull.field("nodes", { type: "GitHubRepository" });
		t.nonNull.int("totalCount");
	}
});
