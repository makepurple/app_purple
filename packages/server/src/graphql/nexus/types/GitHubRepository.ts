import { objectType } from "nexus";
import type { octokit } from "../../../services";

export const GitHubRepository = objectType({
	name: "GitHubRepository",
	definition: (t) => {
		t.nonNull.string("id");
		t.string("description");
		t.nonNull.int("forkCount");
		t.nonNull.int("issueCount", {
			resolve: async (parent, args, { octokit: graphql }) => {
				const githubRepository = await graphql`
					query GetRepositoryIssueCount($name: String!, $owner: String!) {
						repository(name: $name, owner: $owner) {
							issues(first: 0) {
								totalCount
							}
						}
					}
				`
					.cast<
						octokit.GetRepositoryIssueCountQuery,
						octokit.GetRepositoryIssueCountQueryVariables
					>({
						name: parent.name,
						owner: parent.owner.login
					})
					.catch(() => null);

				const issueCount = githubRepository?.repository?.issues.totalCount ?? 0;

				return issueCount;
			}
		});
		t.field("licenseInfo", { type: "GitHubLicense" });
		t.nonNull.string("name");
		t.nonNull.field("owner", { type: "GitHubRepositoryOwner" });
		t.field("primaryLanguage", { type: "GitHubLanguage" });
		t.nonNull.int("pullRequestCount", {
			resolve: async (parent, args, { octokit: graphql }) => {
				const githubRepository = await graphql`
					query GetRepositoryPullRequestCount($name: String!, $owner: String!) {
						repository(name: $name, owner: $owner) {
							pullRequests(first: 0) {
								totalCount
							}
						}
					}
				`
					.cast<
						octokit.GetRepositoryPullRequestCountQuery,
						octokit.GetRepositoryIssueCountQueryVariables
					>({
						name: parent.name,
						owner: parent.owner.login
					})
					.catch(() => null);

				const pullRequestCount = githubRepository?.repository?.pullRequests.totalCount ?? 0;

				return pullRequestCount;
			}
		});
		t.dateTime("pushedAt");
		t.field("repository", {
			type: "Repository",
			resolve: async (parent, args, { prisma }) => {
				return await prisma.repository.findUnique({
					where: {
						name_owner: {
							name: parent.name,
							owner: parent.owner.login
						}
					}
				});
			}
		});
		t.field("skill", {
			type: "Skill",
			resolve: async (parent, args, { prisma }) => {
				return await prisma.skill.findUnique({
					where: {
						name_owner: {
							name: parent.name,
							owner: parent.owner.login
						}
					}
				});
			}
		});
		t.nonNull.int("stargazerCount");
		t.nonNull.url("url");
	}
});
