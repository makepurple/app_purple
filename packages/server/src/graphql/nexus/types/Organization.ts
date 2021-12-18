import { NexusPrisma } from "@makepurple/prisma/nexus";
import { nonNull, objectType } from "nexus";
import type { octokit } from "../../../services";
import { GitHubOrganization } from "../../../services/octokit";

export const Organization = objectType({
	name: NexusPrisma.Organization.$name,
	description: NexusPrisma.Organization.$description,
	definition: (t) => {
		t.field(NexusPrisma.Organization.experiences);
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
		t.field(NexusPrisma.Organization.id);
		t.field(NexusPrisma.Organization.name);
	}
});
