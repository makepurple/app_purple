import { arg, intArg, nonNull, queryField } from "nexus";
import type { octokit } from "../../../services";
import { GitHubRepository } from "../../../services/octokit";

export const suggestSkills = queryField("suggestSkills", {
	type: nonNull("SuggestSkills"),
	args: {
		first: intArg(),
		where: nonNull(arg({ type: "SuggestSkillsWhereInput" }))
	},
	authorize: (parent, args, { user }) => {
		return !!user;
	},
	resolve: async (parent, args, { octokit: graphql }) => {
		const searchQuery = [
			args.where.owner ? `user:${args.where.owner}` : "",
			`${args.where.name} in:name`
		]
			.filter((part) => !!part)
			.join(" ");

		const searchData = await graphql`
			query SuggestRepositories($first: Int, $searchQuery: String!) {
				search(first: $first, query: $searchQuery, type: REPOSITORY) {
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
				first: Math.min(args.first ?? 10, 10),
				searchQuery
			})
			.catch(() => null);

		if (!searchData) return { nodes: [], totalCount: 0 };

		const { totalCount } = searchData.search;
		const nodes = searchData.search.nodes ?? [];

		const repositories: any = nodes.filter((node) => node?.__typename === "GitHubRepository");

		return {
			nodes: repositories,
			totalCount
		};
	}
});
