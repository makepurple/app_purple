import { findManyCursorConnection } from "@devoxa/prisma-relay-cursor-connection";
import { NexusPrisma } from "@makepurple/prisma/nexus";
import { User } from "@prisma/client";
import { arg, intArg, objectType, stringArg } from "nexus";
import { octokit } from "../../../services";
import { GitHubRepository } from "../../../services/octokit";
import { PrismaUtils } from "../../../utils";

export const Skill = objectType({
	name: NexusPrisma.Skill.$name,
	description: NexusPrisma.Skill.$description,
	definition: (t) => {
		t.nonNull.field("desiringUsers", {
			type: "UserConnection",
			args: {
				after: stringArg(),
				before: stringArg(),
				first: intArg(),
				last: intArg(),
				where: arg({ type: "UserWhereInput" })
			},
			resolve: async (parent, args, { prisma }) => {
				const connection = await findManyCursorConnection<User, { id: string }>(
					(paginationArgs) =>
						prisma.skill
							.findUnique({
								where: {
									id: parent.id
								}
							})
							.desiringUsers({
								...paginationArgs,
								include: { user: true }
							})
							.then((items) => items.map((item) => item.user)),
					() =>
						prisma.user.count({
							where: {
								desiredSkills: {
									some: { skillId: { equals: parent.id } }
								}
							}
						}),
					{ ...PrismaUtils.handleRelayConnectionArgs(args) },
					{ ...PrismaUtils.handleRelayCursor() }
				);

				return connection;
			}
		});
		t.nonNull.field("github", {
			type: "GitHubRepository",
			resolve: async (parent, args, { octokit: graphql }) => {
				const githubRepository = await graphql`
					query GetGitHubRepositoryForSkill($name: String!, $owner: String!) {
						repository(name: $name, owner: $owner) {
							...GitHubRepository
						}
					}
					${GitHubRepository}
				`
					.cast<
						octokit.GetGitHubRepositoryForSkillQuery,
						octokit.GetGitHubRepositoryForSkillQueryVariables
					>({
						name: parent.name,
						owner: parent.owner
					})
					.catch(() => null);

				if (!githubRepository?.repository) {
					throw new Error("Could not get skill's GitHub data");
				}

				/**
				 * !HACK
				 * @description Cannot handle GitHub's RepositoryOwner type well, so casting to any
				 * here to ignore type error.
				 * @author David Lee
				 * @date December 24, 2021
				 */
				const repository: any = githubRepository.repository;

				return repository;
			}
		});
		t.field(NexusPrisma.Skill.id);
		t.field(NexusPrisma.Skill.name);
		t.field(NexusPrisma.Skill.owner);
		t.nonNull.field("users", {
			type: "UserConnection",
			args: {
				after: stringArg(),
				before: stringArg(),
				first: intArg(),
				last: intArg(),
				where: arg({ type: "UserWhereInput" })
			},
			resolve: async (parent, args, { prisma }) => {
				const connection = await findManyCursorConnection<User, { id: string }>(
					(paginationArgs) =>
						prisma.skill
							.findUnique({
								where: {
									id: parent.id
								}
							})
							.users({
								...paginationArgs,
								include: { user: true }
							})
							.then((items) => items.map((item) => item.user)),
					() =>
						prisma.user.count({
							where: {
								skills: {
									some: { skillId: { equals: parent.id } }
								}
							}
						}),
					{ ...PrismaUtils.handleRelayConnectionArgs(args) },
					{ ...PrismaUtils.handleRelayCursor() }
				);

				return connection;
			}
		});
		t.nonNull.boolean("viewerFollowing", {
			resolve: async (parent, args, { prisma, user }) => {
				if (!user) return false;

				const follow = await prisma.followSkill.findUnique({
					where: {
						followerId_followingId: {
							followerId: user.id,
							followingId: parent.id
						}
					}
				});

				return !!follow;
			}
		});
	}
});
