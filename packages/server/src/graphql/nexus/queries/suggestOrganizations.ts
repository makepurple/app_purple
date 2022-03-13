import { arg, intArg, nonNull, queryField } from "nexus";
import type { octokit } from "../../../services";
import { GitHubOrganization } from "../../../services/octokit";

export const suggestOrganizations = queryField("suggestOrganizations", {
	type: nonNull("SuggestOrganizations"),
	args: {
		first: intArg(),
		where: nonNull(arg({ type: "SuggestOrganizationsWhereInput" }))
	},
	authorize: (parent, args, { user }) => {
		return !!user;
	},
	resolve: async (parent, args, { octokit: graphql }) => {
		const searchData = await graphql`
			query SuggestOrganizations($first: Int, $searchQuery: String!) {
				search(first: $first, query: $searchQuery, type: USER) {
					nodes {
						... on Organization {
							...GitHubOrganization
						}
					}
					totalCount: userCount
				}
			}
			${GitHubOrganization}
		`
			.cast<octokit.SuggestOrganizationsQuery, octokit.SuggestOrganizationsQueryVariables>({
				first: Math.min(args.first ?? 10, 10),
				searchQuery: `type:org ${args.where.name} in:login in:name`
			})
			.catch(() => null);

		if (!searchData) return { nodes: [], totalCount: 0 };

		const { totalCount } = searchData.search;
		const nodes = searchData.search.nodes ?? [];
		const organizations: any = nodes.filter(
			(node) => node?.__typename === "GitHubOrganization"
		);

		return {
			nodes: organizations,
			totalCount
		};
	}
});
