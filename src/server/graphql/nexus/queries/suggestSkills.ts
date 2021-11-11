import type { octokit } from "@/server/services";
import { GitHubRepository } from "@/server/services/octokit";
import { arg, nonNull, queryField } from "nexus";

export const suggestSkills = queryField("suggestSkills", {
	type: nonNull("SuggestSkills"),
	args: {
		where: nonNull(arg({ type: "SuggestSkillWhereInput" }))
	},
	authorize: (parent, args, { user }) => {
		return !!user;
	},
	resolve: async (parent, args, { octokit: graphql }) => {
		const searchData = await graphql`
			query SuggestRepositories($query: String!) {
				search(first: 10, query: $query, type: REPOSITORY) {
					nodes {
						... on Repository {
							...GitHubRepository
						}
					}
					totalCount: repositoryCount
				}
			}
			${GitHubRepository}
		`
			.cast<octokit.SuggestRepositoriesQuery, octokit.SuggestRepositoriesQueryVariables>({
				query: `user:${args.where.owner} ${args.where.name} in:name`
			})
			.catch(() => null);

		if (!searchData) return { nodes: [], totalCount: 0 };

		const { totalCount } = searchData.search;
		const nodes = searchData.search.nodes ?? [];

		const repositories = nodes.filter(
			(node) => node?.__typename === "Repository"
		) as readonly octokit.GitHubRepositoryFragment[];

		return {
			nodes: repositories,
			totalCount
		};
	}
});
