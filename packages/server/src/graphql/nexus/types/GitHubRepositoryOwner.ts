import type { Prisma, User } from "@prisma/client";
import { arg, intArg, interfaceType, stringArg } from "nexus";
import type { octokit } from "../../../services";
import { GitHubRepository } from "../../../services/octokit";
import { PrismaUtils } from "../../../utils";

const MAX_REPOSITORIES = 20;

export const GitHubRepositoryOwner = interfaceType({
	name: "GitHubRepositoryOwner",
	definition: (t) => {
		t.nonNull.url("avatarUrl");
		t.nonNull.field("experiencers", {
			type: "UserConnection",
			args: {
				after: stringArg(),
				before: stringArg(),
				first: intArg(),
				last: intArg(),
				where: arg({ type: "UserWhereInput" })
			},
			resolve: async (parent, args, { prisma }) => {
				const where: Prisma.UserWhereInput = {
					...PrismaUtils.nonNull(args.where),
					experiences: {
						some: {
							organizationName: parent.login
						}
					}
				};

				return await PrismaUtils.findManyCursorConnection<User, { id: string }>(
					(paginationArgs) => prisma.user.findMany({ ...paginationArgs, where }),
					() => prisma.user.count({ where }),
					{ ...PrismaUtils.handleRelayConnectionArgs(args) },
					{ ...PrismaUtils.handleRelayCursor() }
				);
			}
		});
		t.nonNull.string("id");
		t.nonNull.string("login");
		t.nonNull.field("repositories", {
			type: "GitHubRepositoryConnection",
			args: {
				after: stringArg(),
				before: stringArg(),
				first: intArg(),
				last: intArg()
			},
			resolve: async (parent, args, { octokit: graphql }) => {
				const connection = await graphql`
					query GetRepositoryOwnerRepositories(
						$owner: String!
						$after: String
						$before: String
						$first: Int
						$last: Int
					) {
						repositoryOwner(login: $owner) {
							id
							repositories(
								after: $after
								before: $before
								first: $first
								last: $last
								orderBy: { field: STARGAZERS, direction: DESC }
								ownerAffiliations: [OWNER]
								privacy: PUBLIC
								isFork: false
							) {
								pageInfo {
									endCursor
									hasNextPage
									hasPreviousPage
									startCursor
								}
								totalCount
								edges {
									cursor
									node {
										...GitHubRepository
									}
								}
							}
						}
					}
					${GitHubRepository}
				`
					.cast<
						octokit.GetRepositoryOwnerRepositoriesQuery,
						octokit.GetRepositoryOwnerRepositoriesQueryVariables
					>({
						owner: parent.login,
						after: args.after,
						before: args.before,
						first: args.first ? Math.min(args.first, MAX_REPOSITORIES) : undefined,
						last: args.last ? Math.min(args.last, MAX_REPOSITORIES) : undefined
					})
					.then((result) => result.repositoryOwner?.repositories)
					.catch(() => null);

				if (!connection) {
					return {
						pageInfo: {
							endCursor: null,
							hasNextPage: false,
							hasPreviousPage: false,
							startCursor: null
						},
						totalCount: 0,
						edges: []
					};
				}

				return {
					pageInfo: connection.pageInfo,
					totalCount: connection.totalCount,
					edges: (connection.edges ?? []).filter((edge) => !!edge?.node) as any[]
				};
			}
		});
		t.nonNull.url("url");
	}
});
