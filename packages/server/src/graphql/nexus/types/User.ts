import { findManyCursorConnection } from "@devoxa/prisma-relay-cursor-connection";
import { NexusPrisma } from "@makepurple/prisma/nexus";
import { Comment, Follow, Post, Prisma, Skill, User as _User } from "@prisma/client";
import { arg, intArg, objectType, stringArg } from "nexus";
import type { octokit } from "../../../services";
import { GitHubUser } from "../../../services/octokit";
import { PrismaUtils } from "../../../utils";

export const User = objectType({
	name: NexusPrisma.User.$name,
	description: NexusPrisma.User.$description,
	definition: (t) => {
		t.implements("Followable");
		t.nonNull.field("comments", {
			type: "CommentConnection",
			args: {
				after: stringArg(),
				before: stringArg(),
				first: intArg(),
				last: intArg(),
				where: arg({ type: "CommentWhereInput" }),
				orderBy: arg({ type: "CommentOrderByInput" })
			},
			resolve: async (parent, args, { prisma }) => {
				const user = prisma.user.findUnique({ where: { id: parent.id } });

				const connection = await findManyCursorConnection<Comment, { id: string }>(
					(paginationArgs) =>
						user.comments({
							...paginationArgs,
							where: PrismaUtils.nonNull(args.where),
							orderBy: PrismaUtils.nonNull(args.orderBy)
						}),
					() =>
						prisma.comment.count({
							where: {
								...PrismaUtils.nonNull(args.where),
								author: { id: parent.id }
							}
						}),
					{ ...PrismaUtils.handleRelayConnectionArgs(args) },
					{ ...PrismaUtils.handleRelayCursor() }
				);

				return connection;
			}
		});
		t.nonNull.field(NexusPrisma.User.createdAt);
		t.field(NexusPrisma.User.description);
		t.nonNull.field("desiredSkills", {
			type: "SkillConnection",
			args: {
				first: intArg(),
				last: intArg(),
				after: stringArg(),
				before: stringArg(),
				where: arg({ type: "SkillWhereInput" })
			},
			resolve: async (parent, args, { prisma }) => {
				const user = prisma.user.findUnique({
					where: { id: parent.id }
				});

				const connection = await findManyCursorConnection<Skill, { id: string }>(
					(paginationArgs) =>
						user
							.skills({
								...paginationArgs,
								where: PrismaUtils.nonNull(args.where),
								select: { skill: true }
							})
							.then((skills) => skills.map((skill) => skill.skill)),
					() =>
						prisma.skillsOnUsers.count({
							where: {
								user: { id: parent.id },
								skill: PrismaUtils.nonNull(args.where)
							}
						}),
					{ ...PrismaUtils.handleRelayConnectionArgs(args, 100) },
					{ ...PrismaUtils.handleRelayCursor() }
				);

				return connection;
			}
		});
		t.field({
			...NexusPrisma.User.email,
			authorize: (parent, args, { user }) => {
				return user?.id === parent.id;
			}
		});
		t.field(NexusPrisma.User.experiences);
		t.nonNull.field("followers", {
			type: "UserConnection",
			args: {
				after: stringArg(),
				before: stringArg(),
				first: intArg(),
				last: intArg(),
				where: arg({ type: "UserWhereInput" })
			},
			resolve: async (parent, args, { prisma }) => {
				const connection = await findManyCursorConnection<_User, { id: string }>(
					(paginationArgs) =>
						prisma.user
							.findUnique({ where: { id: parent.id } })
							.followedBy({
								...paginationArgs,
								where: {
									followingId: parent.id,
									follower: PrismaUtils.nonNull(args.where)
								},
								include: { follower: true }
							})
							.then((friendRequests) =>
								friendRequests.map((friendRequest) => friendRequest.follower)
							),
					() =>
						prisma.followUser.count({
							where: {
								followingId: parent.id,
								follower: PrismaUtils.nonNull(args.where)
							}
						}),
					{ ...PrismaUtils.handleRelayConnectionArgs(args) },
					{ ...PrismaUtils.handleRelayCursor() }
				);

				return connection;
			}
		});
		t.nonNull.field("following", {
			type: "FollowConnection",
			args: {
				after: stringArg(),
				before: stringArg(),
				first: intArg(),
				last: intArg(),
				where: arg({ type: "FollowWhereInput" })
			},
			resolve: async (parent, args, { prisma }) => {
				const skillOnly: boolean = args.where?.type === "Skill";
				const userOnly: boolean = args.where?.type === "User";

				const where: Prisma.FollowWhereInput = {
					...(skillOnly
						? { followingSkill: { isNot: null } }
						: userOnly
						? { followingUser: { isNot: null } }
						: {}),
					OR: [
						{
							followingSkill: {
								followerId: { equals: parent.id },
								following: PrismaUtils.nonNull(args.where?.skill)
							}
						},
						{
							followingUser: {
								followerId: { equals: parent.id },
								following: PrismaUtils.nonNull(args.where?.user)
							}
						}
					]
				};

				const connection = await findManyCursorConnection<Follow, { id: string }>(
					(paginationArgs) => prisma.follow.findMany({ ...paginationArgs, where }),
					() => prisma.follow.count({ where }),
					{ ...PrismaUtils.handleRelayConnectionArgs(args) },
					{ ...PrismaUtils.handleRelayCursor() }
				);

				return connection;
			}
		});
		t.nonNull.field("friendRequests", {
			type: "UserConnection",
			args: {
				after: stringArg(),
				before: stringArg(),
				first: intArg(),
				last: intArg(),
				where: arg({ type: "UserWhereInput" })
			},
			authorize: (parent, args, { user }) => {
				return user?.id === parent.id;
			},
			resolve: async (parent, args, { prisma }) => {
				const where: Prisma.FriendshipWhereInput = {
					frienderId: parent.id,
					friending: PrismaUtils.nonNull(args.where),
					rejected: false
				};

				const connection = await findManyCursorConnection<_User, { id: string }>(
					(paginationArgs) =>
						prisma.user
							.findUnique({ where: { id: parent.id } })
							.friending({
								...paginationArgs,
								where,
								include: { friending: true }
							})
							.then((friendRequests) =>
								friendRequests.map((friendRequest) => friendRequest.friending)
							),
					() => prisma.friendship.count({ where }),
					{ ...PrismaUtils.handleRelayConnectionArgs(args) },
					{ ...PrismaUtils.handleRelayCursor() }
				);

				return connection;
			}
		});
		t.nonNull.field("friends", {
			type: "UserConnection",
			args: {
				after: stringArg(),
				before: stringArg(),
				first: intArg(),
				last: intArg(),
				where: arg({ type: "UserWhereInput" })
			},
			resolve: async (parent, args, { prisma }) => {
				const user = prisma.user.findUnique({
					where: { id: parent.id }
				});

				const connection = await findManyCursorConnection<_User, { id: string }>(
					(paginationArgs) =>
						user
							.friending({
								...paginationArgs,
								where: {
									friender: PrismaUtils.nonNull(args.where),
									friendingId: parent.id
								},
								include: { friender: true }
							})
							.then((friendRequests) =>
								friendRequests.map((friendRequest) => friendRequest.friender)
							),
					() =>
						prisma.friendship.count({
							where: {
								friender: PrismaUtils.nonNull(args.where),
								friendingId: parent.id
							}
						}),
					{ ...PrismaUtils.handleRelayConnectionArgs(args) },
					{ ...PrismaUtils.handleRelayCursor() }
				);

				return connection;
			}
		});
		t.nonNull.field("github", {
			type: "GitHubUser",
			resolve: async (parent, args, { octokit: graphql }) => {
				const githubUser = await graphql`
					query GetGitHubUser($login: String!) {
						user(login: $login) {
							...GitHubUser
						}
					}
					${GitHubUser}
				`
					.cast<octokit.GetGitHubUserQuery, octokit.GetGitHubUserQueryVariables>({
						login: parent.name
					})
					.catch(() => null);

				if (!githubUser?.user) {
					throw new Error("Could not get user's GitHub data");
				}

				return githubUser.user;
			}
		});
		t.nonNull.url("githubUrl", {
			resolve: ({ name }) => `https://github.com/${name}`
		});
		t.field(NexusPrisma.User.id);
		t.field(NexusPrisma.User.image);
		t.field(NexusPrisma.User.name);
		t.nonNull.field("posts", {
			type: "PostConnection",
			args: {
				first: intArg(),
				last: intArg(),
				after: stringArg(),
				before: stringArg(),
				where: arg({ type: "PostWhereInput" })
			},
			resolve: async (parent, args, { prisma }) => {
				const user = prisma.user.findUnique({
					where: { id: parent.id }
				});

				const connection = await findManyCursorConnection<Post, { id: string }>(
					(paginationArgs) =>
						user.posts({
							...paginationArgs,
							where: PrismaUtils.nonNull(args.where),
							orderBy: {
								createdAt: Prisma.SortOrder.desc
							}
						}),
					() =>
						prisma.post.count({
							where: {
								...PrismaUtils.nonNull(args.where),
								author: { id: { equals: parent.id } }
							}
						}),
					{ ...PrismaUtils.handleRelayConnectionArgs(args) },
					{ ...PrismaUtils.handleRelayCursor() }
				);

				return connection;
			}
		});
		t.field(NexusPrisma.User.repositories);
		t.nonNull.field("skills", {
			type: "SkillConnection",
			args: {
				first: intArg(),
				last: intArg(),
				after: stringArg(),
				before: stringArg(),
				where: arg({ type: "SkillWhereInput" })
			},
			resolve: async (parent, args, { prisma }) => {
				const user = prisma.user.findUnique({
					where: { id: parent.id }
				});

				const connection = await findManyCursorConnection<Skill, { id: string }>(
					(paginationArgs) =>
						user
							.skills({
								...paginationArgs,
								where: PrismaUtils.nonNull(args.where),
								select: { skill: true }
							})
							.then((skills) => skills.map((skill) => skill.skill)),
					() =>
						prisma.skillsOnUsers.count({
							where: {
								user: { id: parent.id },
								skill: PrismaUtils.nonNull(args.where)
							}
						}),
					{ ...PrismaUtils.handleRelayConnectionArgs(args, 100) },
					{ ...PrismaUtils.handleRelayCursor() }
				);

				return connection;
			}
		});
		t.nonNull.field("upvotedPosts", {
			type: "PostConnection",
			args: {
				first: intArg(),
				last: intArg(),
				after: stringArg(),
				before: stringArg(),
				where: arg({ type: "PostWhereInput" })
			},
			resolve: async (parent, args, { prisma }) => {
				const user = prisma.user.findUnique({
					where: { id: parent.id }
				});

				const connection = await findManyCursorConnection<Post, { id: string }>(
					(paginationArgs) =>
						user
							.upvotedPosts({
								...paginationArgs,
								where: { post: PrismaUtils.nonNull(args.where) },
								select: { post: true }
							})
							.then((posts) => posts.map((p) => p.post)),
					() =>
						prisma.postUpvoter.count({
							where: {
								user: { id: parent.id },
								post: PrismaUtils.nonNull(args.where)
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

				const follow = await prisma.followUser.findUnique({
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
		t.nonNull.boolean("viewerFriended", {
			resolve: async (parent, args, { prisma, user }) => {
				if (!user) return false;

				const friendship = await prisma.friendship.findUnique({
					where: {
						frienderId_friendingId: {
							frienderId: parent.id,
							friendingId: user.id
						}
					}
				});

				return !!friendship;
			}
		});
	}
});
