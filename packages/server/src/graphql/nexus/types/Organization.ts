import { objectType } from "nexus";
import type { octokit } from "../../../services";
import { GitHubOrganization } from "../../../services/octokit";

export const Organization = objectType({
	name: "Organization",
	definition: (t) => {
		t.nonNull.list.nonNull.field("experiences", {
			type: "Experience",
			resolve: (parent, args, { prisma }) => {
				return prisma.experience.findMany({});
			}
		});
		t.nonNull.field("github", {
			type: "GitHubOrganization",
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
						login: parent.name
					})
					.catch(() => null);

				if (!githubOrganization?.organization) {
					throw new Error("Could not get organization's GitHub data");
				}

				return githubOrganization.organization;
			}
		});
		t.nonNull.id("id");
		t.nonNull.string("name");
	}
});
