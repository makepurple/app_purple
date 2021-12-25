import { arg, intArg, nonNull, queryField } from "nexus";
import { octokit } from "../../../services";
import { GitHubRepository } from "../../../services/octokit";

export const suggestRepositories = queryField("suggestRepositories", {
	type: nonNull("SuggestRepositories"),
	args: {
		first: intArg(),
		where: nonNull(arg({ type: "SuggestRepositoriesWhereInput" }))
	},
	authorize: (parent, args, { user }) => {
		return !!user;
	},
	resolve: async (parent, args, { octokit: graphql, user }) => {
		if (!user) throw new Error();

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
				searchQuery: `${args.where.name} in:name user:${user.name}`
			})
			.catch(() => null);

		if (!searchData) return { nodes: [], totalCount: 0 };

		const { totalCount } = searchData.search;
		const nodes = searchData.search.nodes ?? [];

		const repositories: any = nodes.filter((node) => node?.__typename === "Repository");

		return { nodes: repositories, totalCount };
	}
});
