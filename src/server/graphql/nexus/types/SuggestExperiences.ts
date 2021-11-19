import { objectType } from "nexus";

export const SuggestExperiences = objectType({
	name: "SuggestExperiences",
	definition: (t) => {
		t.nonNull.list.nonNull.field("nodes", { type: "GitHubOrganization" });
		t.nonNull.int("totalCount");
	}
});
