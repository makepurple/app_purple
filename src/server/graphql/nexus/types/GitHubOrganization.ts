import { objectType } from "nexus";

export const GitHubOrganization = objectType({
	name: "GitHubOrganization",
	definition: (t) => {
		t.implements("GitHubRepositoryOwner");
		t.string("description");
		t.string("name");
	}
});
