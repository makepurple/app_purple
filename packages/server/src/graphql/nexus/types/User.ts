import { findManyCursorConnection } from "@devoxa/prisma-relay-cursor-connection";
import { NexusPrisma } from "@makepurple/prisma/nexus";
import { dayjs } from "@makepurple/utils";
import {
	Chat,
	Comment,
	Follow,
	NotificationType,
	Post,
	Prisma,
	Skill,
	User as _User,
	UserActivityType
} from "@prisma/client";
import { stripIndents } from "common-tags";
import { arg, intArg, list, nonNull, objectType, stringArg } from "nexus";
import type { octokit } from "../../../services";
import { GitHubUser } from "../../../services/octokit";
import { PrismaUtils } from "../../../utils";

export const User = objectType({
	name: NexusPrisma.User.$name,
	description: NexusPrisma.User.$description,
	definition: (t) => {
		t.implements("Followable");
		t.nonNull.field("activities", {
			type: "UserActivityConnection",
			args: {
				after: stringArg(),
				before: stringArg(),
				first: intArg(),
				last: intArg(),
				where: arg({ type: "UserActivityWhereInput" })
			},
			resolve: async (parent, args, { prisma }) => {
				const connection = await findManyCursorConnection<any, { id: string }>(
					(paginationArgs) =>
						prisma.user
							.findUnique({ where: { id: parent.id } })
							.activities({
								...paginationArgs,
								orderBy: {
									updatedAt: "desc"
								},
								where: {
									...PrismaUtils.nonNull(args.where),
									OR: [
										{
											type: UserActivityType.CommentPost,
											comment: { isNot: null }
										},
										{
											type: UserActivityType.FollowSkill,
											follow: { isNot: null as any }
										},
										{
											type: UserActivityType.FollowUser,
											follow: { isNot: null as any }
										},
										{
											type: UserActivityType.FriendAcceptUser,
											follow: { isNot: null as any }
										},
										{
											type: UserActivityType.Joined
										},
										{
											type: UserActivityType.PublishPost,
											post: { isNot: null as any }
										},
										{
											type: UserActivityType.UpvotePost,
											post: { isNot: null as any }
										}
									]
								}
							})
							.then((items) => {
								return items.map((item) => ({
									__typename: `UserActivity${item.type}`,
									...item
								}));
							}),
					() =>
						prisma.user
							.findUnique({
								where: { id: parent.id },
								include: {
									_count: {
										select: {
											activities: true
										}
									}
								}
							})
							.then((result) => result?._count.activities ?? 0),
					{ ...PrismaUtils.handleRelayConnectionArgs(args) },
					{ ...PrismaUtils.handleRelayCursor() }
				);

				return connection;
			}
		});
		t.nonNull.field("activityFeed", {
			type: "UserActivityConnection",
			args: {
				after: stringArg(),
				before: stringArg(),
				first: intArg(),
				last: intArg(),
				where: arg({ type: "UserActivityWhereInput" })
			},
			authorize: (parent, args, { user }) => {
				return parent.id === user?.id;
			},
			resolve: async (parent, args, { prisma }) => {
				const connection = await findManyCursorConnection<any, { id: string }>(
					(paginationArgs) =>
						prisma.userActivity
							.findMany({
								...paginationArgs,
								orderBy: {
									updatedAt: "desc"
								},
								where: {
									...PrismaUtils.nonNull(args.where),
									AND: [
										{
											OR: [
												{
													type: UserActivityType.CommentPost,
													comment: { isNot: null }
												},
												{
													type: UserActivityType.FollowSkill,
													follow: { isNot: null as any }
												},
												{
													type: UserActivityType.FollowUser,
													follow: { isNot: null as any }
												},
												{
													type: UserActivityType.FriendAcceptUser,
													follow: { isNot: null as any }
												},
												{
													type: UserActivityType.Joined
												},
												{
													type: UserActivityType.PublishPost,
													post: { isNot: null as any }
												},
												{
													type: UserActivityType.UpvotePost,
													post: { isNot: null as any }
												}
											]
										},
										{
											OR: [
												{
													skills: {
														some: {
															followedBy: {
																some: {
																	follower: {
																		id: { equals: parent.id }
																	}
																}
															}
														}
													}
												},
												{
													user: {
														followedBy: {
															some: {
																follower: {
																	id: { equals: parent.id }
																}
															}
														}
													}
												}
											]
										}
									]
								}
							})
							.then((items) => {
								return items.map((item) => ({
									__typename: `UserActivity${item.type}`,
									...item
								}));
							}),
					() =>
						prisma.userActivity.count({
							where: {
								...PrismaUtils.nonNull(args.where),
								user: {
									followedBy: {
										some: {
											follower: { id: { equals: parent.id } }
										}
									}
								}
							}
						}),
					{ ...PrismaUtils.handleRelayConnectionArgs(args) },
					{ ...PrismaUtils.handleRelayCursor() }
				);

				return connection;
			}
		});
		t.nonNull.field("chats", {
			type: "ChatConnection",
			args: {
				after: stringArg(),
				before: stringArg(),
				first: intArg(),
				last: intArg(),
				where: arg({ type: "ChatWhereInput" })
			},
			authorize: (parent, args, { user }) => {
				return user?.id === parent.id;
			},
			resolve: async (parent, args, { prisma }) => {
				const connection = await findManyCursorConnection<Chat, { id: string }>(
					(paginationArgs) =>
						prisma.user
							.findUnique({
								where: {
									id: parent.id
								}
							})
							.chats({
								...paginationArgs,
								where: PrismaUtils.nonNull(args.where),
								include: { chat: true }
							})
							.then((items) => items.map((item) => item.chat)),
					() =>
						prisma.chatsOnUsers.count({
							where: {
								user: { id: { equals: parent.id } }
							}
						}),
					{ ...PrismaUtils.handleRelayConnectionArgs(args) },
					{ ...PrismaUtils.handleRelayCursor() }
				);

				return connection;
			}
		});
		t.nonNull.field("comments", {
			type: "CommentConnection",
			args: {
				after: stringArg(),
				before: stringArg(),
				first: intArg(),
				last: intArg(),
				orderBy: arg({ type: "CommentOrderByInput" }),
				where: arg({ type: "CommentWhereInput" })
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
		t.nonNull.int("commentUpvotes", {
			resolve: async (parent, args, { prisma }) => {
				const result = await prisma.commentUpvoter.aggregate({
					_count: { _all: true },
					where: {
						comment: {
							author: { id: { equals: parent.id } }
						}
					}
				});

				return result._count._all;
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
				orderBy: list(nonNull(arg({ type: "SkillOrderByInput" }))),
				where: arg({ type: "SkillWhereInput" })
			},
			resolve: async (parent, args, { prisma }) => {
				const connection = await findManyCursorConnection<Skill, { id: string }>(
					(paginationArgs) =>
						prisma.user
							.findUnique({ where: { id: parent.id } })
							.desiredSkills({
								...paginationArgs,
								orderBy: PrismaUtils.nonNull(args.orderBy)?.map((orderBy) => ({
									skill: orderBy
								})),
								where: PrismaUtils.nonNull(args.where),
								select: { skill: true }
							})
							.then((skills) => skills.map((skill) => skill.skill)),
					() =>
						prisma.user
							.findUnique({
								where: { id: parent.id },
								include: {
									_count: { select: { desiredSkills: true } }
								}
							})
							.then((result) => result?._count.desiredSkills ?? 0),
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
		t.nonNull.field("friendRequestsReceived", {
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
					friender: PrismaUtils.nonNull(args.where),
					friending: {
						id: { equals: parent.id },
						friending: {
							none: {
								friending: { id: { equals: parent.id } }
							}
						}
					},
					rejectedAt: { not: { equals: null } }
				};

				const connection = await findManyCursorConnection<_User, { id: string }>(
					async ({ cursor, skip, take }) =>
						take === 0
							? await Promise.resolve([])
							: await prisma.user
									.findUnique({ where: { id: parent.id } })
									.friendedBy({
										cursor,
										skip,
										take,
										where,
										include: { friender: true }
									})
									.then((items) => items.map((item) => item.friender)),
					() => prisma.friendship.count({ where }),
					{ ...PrismaUtils.handleRelayConnectionArgs(args) },
					{ ...PrismaUtils.handleRelayCursor() }
				);

				return connection;
			}
		});
		t.nonNull.field("friendRequestsSent", {
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
					friender: { id: { equals: parent.id } },
					friending: {
						...PrismaUtils.nonNull(args.where),
						friending: {
							none: {
								friending: { id: { equals: parent.id } }
							}
						}
					},
					rejectedAt: { equals: null }
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
							.then((items) => items.map((item) => item.friending)),
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
				const frienderIds: string[] = await prisma.user
					.findMany({
						where: PrismaUtils.nonNull(args.where),
						select: { id: true }
					})
					.then((items) => items.map((item) => item.id));

				const where: Prisma.FriendshipWhereInput = {
					friender: { id: { in: frienderIds } },
					friending: {
						id: { equals: parent.id },
						friending: {
							some: {
								friending: { id: { in: frienderIds } }
							}
						}
					}
				};

				const connection = await findManyCursorConnection<_User, { id: string }>(
					(paginationArgs) =>
						prisma.user
							.findUnique({ where: { id: parent.id } })
							.friending({
								...paginationArgs,
								where,
								include: { friender: true }
							})
							.then((items) => items.map((item) => item.friender)),
					() => prisma.friendship.count({ where }),
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
		t.nonNull.field("notifications", {
			type: "NotificationConnection",
			args: {
				first: intArg(),
				last: intArg(),
				after: stringArg(),
				before: stringArg(),
				where: arg({ type: "NotificationsWhereInput" })
			},
			authorize: (parent, args, { user }) => {
				return parent.id === user?.id;
			},
			resolve: async (parent, args, { prisma }) => {
				const lastOpenedAt: Date | undefined = args.where?.opened
					? await prisma.user
							.findUnique({
								where: { id: parent.id }
							})
							.then((user) => user?.notificationsLastOpenedAt)
					: undefined;

				const connection = await findManyCursorConnection<any, { id: string }>(
					async ({ cursor, skip, take }) =>
						take === 0
							? // Skip running any query if take is 0
							  await Promise.resolve([])
							: await prisma.user
									.findUnique({ where: { id: parent.id } })
									.notifications({
										cursor,
										skip,
										take,
										where: {
											updatedAt: { gt: lastOpenedAt },
											OR: [
												{
													type: NotificationType.ChatMessageReceived,
													chat: { isNot: null as any }
												},
												{
													type: NotificationType.FriendshipAccepted,
													friendship: { isNot: null as any }
												},
												{
													type: NotificationType.PostCommented,
													post: { isNot: null as any }
												}
											]
										},
										orderBy: [{ updatedAt: "desc" }]
									})
									.then((items) => {
										return items.map((item) => ({
											__typename: `Notification${item.type}`,
											...item
										}));
									}),
					() =>
						prisma.notification.count({
							where: {
								user: { id: { equals: parent.id } },
								updatedAt: { gt: lastOpenedAt }
							}
						}),
					{ ...PrismaUtils.handleRelayConnectionArgs(args) },
					{ ...PrismaUtils.handleRelayCursor() }
				);

				return connection;
			}
		});
		t.field(NexusPrisma.User.notificationsLastOpenedAt);
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
				const connection = await findManyCursorConnection<Post, { id: string }>(
					(paginationArgs) =>
						prisma.user.findUnique({ where: { id: parent.id } }).posts({
							...paginationArgs,
							where: PrismaUtils.nonNull(args.where),
							orderBy: {
								createdAt: Prisma.SortOrder.desc
							}
						}),
					() =>
						prisma.user
							.findUnique({
								where: { id: parent.id },
								include: {
									_count: { select: { posts: true } }
								}
							})
							.then((result) => result?._count.posts ?? 0),
					{ ...PrismaUtils.handleRelayConnectionArgs(args) },
					{ ...PrismaUtils.handleRelayCursor() }
				);

				return connection;
			}
		});
		t.nonNull.int("postUpvotes", {
			resolve: async (parent, args, { prisma }) => {
				const result = await prisma.postUpvoter.aggregate({
					_count: { _all: true },
					where: {
						post: {
							author: { id: { equals: parent.id } }
						}
					}
				});

				return result._count._all;
			}
		});
		t.nonNull.int("postViews", {
			resolve: async (parent, args, { prisma }) => {
				const result = await prisma.postViewer.aggregate({
					_count: { _all: true },
					where: {
						post: {
							author: { id: { equals: parent.id } }
						}
					}
				});

				return result._count._all;
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
				orderBy: list(nonNull(arg({ type: "SkillOrderByInput" }))),
				where: arg({ type: "SkillWhereInput" })
			},
			resolve: async (parent, args, { prisma }) => {
				const connection = await findManyCursorConnection<Skill, { id: string }>(
					(paginationArgs) =>
						prisma.user
							.findUnique({ where: { id: parent.id } })
							.skills({
								...paginationArgs,
								orderBy: PrismaUtils.nonNull(args.orderBy)?.map((orderBy) => ({
									skill: orderBy
								})),
								where: PrismaUtils.nonNull(args.where),
								select: { skill: true }
							})
							.then((skills) => skills.map((skill) => skill.skill)),
					() =>
						prisma.user
							.findUnique({
								where: { id: parent.id },
								include: {
									_count: {
										select: {
											skills: true
										}
									}
								}
							})
							.then((result) => result?._count.skills ?? 0),
					{ ...PrismaUtils.handleRelayConnectionArgs(args, 100) },
					{ ...PrismaUtils.handleRelayCursor() }
				);

				return connection;
			}
		});
		t.nonNull.field("upvotedPosts", {
			type: "PostConnection",
			description: stripIndents`
				Posts this user has upvoted
			`,
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
		t.nonNull.boolean("viewerCanFriend", {
			resolve: async (parent, args, { prisma, user }) => {
				if (!user) return true;

				const friendship = await prisma.friendship.findUnique({
					where: {
						frienderId_friendingId: {
							frienderId: user.id,
							friendingId: parent.id
						}
					}
				});

				const friendshipReturned = await prisma.friendship.findUnique({
					where: {
						frienderId_friendingId: {
							frienderId: parent.id,
							friendingId: user.id
						}
					}
				});

				if (!friendship) return true;

				const isMutualFriend: boolean = !!friendship && !!friendshipReturned;

				if (isMutualFriend) return false;

				const monthsAgo = dayjs().diff(friendship.updatedAt, "month");

				return monthsAgo <= 6;
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
							frienderId: user.id,
							friendingId: parent.id
						}
					}
				});

				return !!friendship;
			}
		});
		t.nonNull.boolean("viewerIsFriend", {
			resolve: async (parent, args, { prisma, user }) => {
				if (!user) return false;

				const friendship = await prisma.friendship.findUnique({
					where: {
						frienderId_friendingId: {
							frienderId: user.id,
							friendingId: parent.id
						}
					}
				});

				const friendshipReturned = await prisma.friendship.findUnique({
					where: {
						frienderId_friendingId: {
							frienderId: parent.id,
							friendingId: user.id
						}
					}
				});

				return !!friendship && !!friendshipReturned;
			}
		});
	}
});
