import { arg, nonNull, objectType } from "nexus";
import type { octokit } from "../../../services";
import {
	GitHubOrganization,
	GitHubRepository,
	GitHubRepositoryOwner,
	GitHubUser
} from "../../../services/octokit";

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

				return repository as any;
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
					${GitHubRepositoryOwner}
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
		t.field("viewer", {
			type: "GitHubUser",
			resolve: async (parent, args, { octokit: graphql, user }) => {
				if (!user) return null;

				const viewer = await graphql`
					query GetGitHubViewer {
						viewer {
							...GitHubUser
						}
					}
					${GitHubUser}
				`
					.cast<octokit.GetGitHubViewerQuery, octokit.GetGitHubViewerQueryVariables>({})
					.then((result) => result.viewer)
					.catch(() => null);

				return viewer;
			}
		});
	}
});
