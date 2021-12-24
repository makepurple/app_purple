import { objectType } from "nexus";
import { octokit } from "../../../services";

export const GitHubRepository = objectType({
	name: "GitHubRepository",
	definition: (t) => {
		t.nonNull.string("id");
		t.string("description");
		t.field("language", {
			type: "TopLanguage",
			resolve: async (parent, args, { octokit: graphql }) => {
				const githubRepository = await graphql`
					query GetRepositoryLanguage($name: String!, $owner: String!) {
						repository(name: $name, owner: $owner) {
							languages(first: 1, orderBy: { field: SIZE, direction: DESC }) {
								edges {
									node {
										color
										name
									}
									size
								}
							}
						}
					}
				`
					.cast<
						octokit.GetRepositoryLanguageQuery,
						octokit.GetRepositoryLanguageQueryVariables
					>({
						name: parent.name,
						owner: parent.owner.login
					})
					.catch(() => null);

				const language = githubRepository?.repository?.languages?.edges?.[0];

				if (!language) return null;

				return {
					color: language.node.color ?? "#6366f1",
					name: language.node.name,
					size: language.size
				};
			}
		});
		t.nonNull.int("issueCount", {
			resolve: async (parent, args, { octokit: graphql }) => {
				const githubRepository = await graphql`
					query GetRepositoryIssueCount($name: String!, $owner: String!) {
						repository(name: $name, owner: $owner) {
							issues(first: 1) {
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
		t.nonNull.string("name");
		t.nonNull.field("owner", { type: "GitHubRepositoryOwner" });
		t.nonNull.url("url");
	}
});
