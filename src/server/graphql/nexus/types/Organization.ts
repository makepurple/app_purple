import type { octokit } from "@/server/services";
import { GitHubOrganization } from "@/server/services/octokit";
import { nonNull, objectType } from "nexus";
import { Organization as _Organization } from "nexus-prisma";

export const Organization = objectType({
	name: _Organization.$name,
	description: _Organization.$description,
	definition: (t) => {
		t.field(_Organization.experiences);
		t.field("github", {
			type: nonNull("GitHubOrganization"),
			resolve: async (parent, args, { octokit: graphql }) => {
				const githubOrganization = await graphql`
					query GetGitHubOrganization($login: String!) {
						organization(login: $login) {
							...GitHubOrganization
						}
					}
					${GitHubOrganization}
				`
					.cast<
						octokit.GetGitHubOrganizationQuery,
						octokit.GetGitHubOrganizationQueryVariables
					>({
						login: ""
					})
					.catch(() => null);

				if (!githubOrganization?.organization) {
					throw new Error("Could not get organization's GitHub data");
				}

				return githubOrganization.organization;
			}
		});
		t.field(_Organization.id);
		t.field(_Organization.name);
	}
});
