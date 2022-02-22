import { arg, intArg, nonNull, queryField } from "nexus";
import type { octokit } from "../../../services";
import { GitHubOrganization, GitHubUser } from "../../../services/octokit";

export const suggestSkillOwners = queryField("suggestSkillOwners", {
	type: nonNull("SuggestSkillOwners"),
	args: {
		first: intArg(),
		where: nonNull(arg({ type: "SuggestSkillOwnersWhereInput" }))
	},
	resolve: async (parent, args, { octokit: graphql }) => {
		const searchData = await graphql`
			query SuggestSkillOwners($first: Int, $searchQuery: String!) {
				search(first: $first, query: $searchQuery, type: USER) {
					nodes {
						... on Organization {
							...GitHubOrganization
						}
						... on User {
							...GitHubUser
						}
					}
					totalCount: userCount
				}
			}
			${GitHubOrganization}
			${GitHubUser}
		`
			.cast<octokit.SuggestSkillOwnersQuery, octokit.SuggestSkillOwnersQueryVariables>({
				first: Math.min(args.first ?? 10, 10),
				searchQuery: `${args.where.name} in:login in:name`
			})
			.catch(() => null);

		if (!searchData) return { nodes: [], totalCount: 0 };

		const { totalCount } = searchData.search;
		const nodes: any = (searchData.search.nodes ?? [])
			.filter((node) => node?.__typename === "Organization" || node?.__typename === "User")
			.map((node) => ({ ...node, __typename: `GitHub${node?.__typename}` }));

		return { nodes, totalCount };
	}
});
