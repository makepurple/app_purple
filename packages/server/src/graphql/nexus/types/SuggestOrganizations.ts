import { objectType } from "nexus";

export const SuggestOrganizations = objectType({
	name: "SuggestOrganizations",
	definition: (t) => {
		t.nonNull.list.nonNull.field("nodes", { type: "GitHubOrganization" });
		t.nonNull.int("totalCount");
	}
});
