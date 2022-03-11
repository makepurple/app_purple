import { arg, nonNull, objectType } from "nexus";
import { octokit } from "../../../services";
import { GitHubOrganization, GitHubRepository, GitHubUser } from "../../../services/octokit";

export const GitHub = objectType({
	name: "GitHub",
	definition: (t) => {
		t.field("repository", {
			type: "GitHubRepository",
			args: {
				where: nonNull(arg({ type: "GitHubRepositoryWhereUniqueInput" }))
			},
			resolve: async (oarent, args, { octokit: graphql }) => {
				const repository = await graphql`
					query GetRepository($name: String!, $owner: String!) {
						repository(name: $name, owner: $owner) {
							...GitHubRepository
						}
					}
					${GitHubRepository}
				`
					.cast<octokit.GetRepositoryQuery, octokit.GetRepositoryQueryVariables>({
						name: args.where.name,
						owner: args.where.owner
					})
					.then((result) => result.repository ?? null)
					.catch(() => null);

				if (!repository) return null;

				return {
					...repository,
					owner: {
						...repository.owner,
						__typename:
							repository.owner.__typename === "GitHubOrganization"
								? "GitHubOrganization"
								: "GitHubUser"
					}
				};
			}
		});
		t.field("repositoryOwner", {
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
					.cast<
						octokit.GetRepositoryOwnerQuery,
						octokit.GetRepositoryOwnerQueryVariables
					>({
						login: args.where.login
					})
					.then((result) => result.repositoryOwner ?? null)
					.catch(() => null);

				if (!repositoryOwner) return null;

				switch (repositoryOwner.__typename) {
					case "GitHubOrganization":
					case "GitHubUser":
						return repositoryOwner;
					default:
						return null;
				}
			}
		});
	}
});
