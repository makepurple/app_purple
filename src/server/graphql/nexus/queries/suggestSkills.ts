import type { octokit } from "@/server/services";
import { GitHubRepository } from "@/server/services/octokit";
import { arg, intArg, nonNull, queryField } from "nexus";

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
				searchQuery: `user:${args.where.owner} ${args.where.name} in:name`
			})
			.catch(() => null);

		if (!searchData) return { nodes: [], totalCount: 0 };

		const { totalCount } = searchData.search;
		const nodes = searchData.search.nodes ?? [];

		const repositories: any = nodes.filter((node) => node?.__typename === "Repository");

		return {
			nodes: repositories,
			totalCount
		};
	}
});
