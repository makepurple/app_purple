import { arg, nonNull, queryField } from "nexus";
import { octokit } from "../../../services";
import { GitHubOrganization, GitHubUser } from "../../../services/octokit";

export const skillOwner = queryField("skillOwner", {
	type: "GitHubRepositoryOwner",
	args: {
		where: nonNull(arg({ type: "GitHubRepositoryOwnerWhereUniqueInput" }))
	},
	resolve: async (parent, args, { octokit: graphql }) => {
		const repositoryOwner = await graphql`
			query GetRepositoryOwner($login: String!) {
				repositoryOwner(login: $login) {
					__typename
					...GitHubRepositoryOwner
					... on Organization {
						...GitHubOrganization
					}
					... on User {
						...GitHubUser
					}
				}
			}
			${GitHubOrganization}
			${GitHubUser}
		`
			.cast<octokit.GetRepositoryOwnerQuery, octokit.GetRepositoryOwnerQueryVariables>({
				login: args.where.login
			})
			.then((result) => result.repositoryOwner ?? null)
			.catch(() => null);

		if (!repositoryOwner) return null;

		switch (repositoryOwner.__typename) {
			case "Organization":
				return { ...repositoryOwner, __typename: "GitHubOrganization" };
			case "User":
				return { ...repositoryOwner, __typename: "GitHubUser" };
			default:
				return null;
		}
	}
});
