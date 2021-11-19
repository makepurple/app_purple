import type { octokit } from "@/server/services";
import { GitHubOrganization } from "@/server/services/octokit";
import { arg, intArg, nonNull, queryField } from "nexus";

export const suggestExperiences = queryField("suggestExperiences", {
	type: nonNull("SuggestExperiences"),
	args: {
		first: intArg(),
		where: nonNull(arg({ type: "SuggestExperiencesWhereInput" }))
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
					totalCount: repositoryCount
				}
				${GitHubOrganization}
			}
		`
			.cast<octokit.SuggestOrganizationsQuery, octokit.SuggestOrganizationsQueryVariables>({
				first: Math.min(args.first ?? 10, 10),
				searchQuery: `type:org ${args.where.name} in:name`
			})
			.catch(() => null);

		if (!searchData) return { nodes: [], totalCount: 0 };

		const { totalCount } = searchData.search;
		const nodes = searchData.search.nodes ?? [];

		const organizations: any = nodes.filter((node) => node?.__typename === "Organization");

		return {
			nodes: organizations,
			totalCount
		};
	}
});
