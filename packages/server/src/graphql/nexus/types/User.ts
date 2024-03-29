import { dayjs } from "@makepurple/utils";
import {
	Chat,
	CodeExample,
	Comment,
	Experience,
	Follow,
	NotificationType,
	Post,
	Prisma,
	Repository,
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
	name: "User",
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
				const connection = await PrismaUtils.findManyCursorConnection<any, { id: string }>(
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
											type: UserActivityType.CommentCodeExample,
											comment: {}
										},
										{
											type: UserActivityType.CommentPost,
											comment: {}
										},
										{
											type: UserActivityType.CreateCodeExample,
											codeExample: {}
										},
										{
											type: UserActivityType.FollowSkill,
											follow: {}
										},
										{
											type: UserActivityType.FollowUser,
											follow: {}
										},
										{
											type: UserActivityType.FriendAcceptUser,
											follow: {}
										},
										{
											type: UserActivityType.Joined
										},
										{
											type: UserActivityType.PublishPost,
											post: {}
										},
										{
											type: UserActivityType.UpvoteCodeExample,
											codeExample: {}
										},
										{
											type: UserActivityType.UpvotePost,
											post: {}
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
				const connection = await PrismaUtils.findManyCursorConnection<any, { id: string }>(
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
													comment: {}
												},
												{
													type: UserActivityType.CreateCodeExample,
													codeExample: {}
												},
												{
													type: UserActivityType.FollowSkill,
													follow: {}
												},
												{
													type: UserActivityType.FollowUser,
													follow: {}
												},
												{
													type: UserActivityType.FriendAcceptUser,
													follow: {}
												},
												{
													type: UserActivityType.Joined
												},
												{
													type: UserActivityType.PublishPost,
													post: {}
												},
												{
													type: UserActivityType.UpvoteCodeExample,
													codeExample: {}
												},
												{
													type: UserActivityType.UpvotePost,
													post: {}
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
		t.nonNull.boolean("banned", {
			resolve: async (parent, args, { prisma }) => {
				const banReason = await prisma.banReason.findUnique({
					where: { userId: parent.id }
				});

				return !!banReason;
			}
		});
		t.field("banReason", {
			type: "BanReason",
			resolve: async (parent, args, { prisma }) => {
				return await prisma.banReason.findUnique({
					where: { userId: parent.id }
				});
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
				const connection = await PrismaUtils.findManyCursorConnection<Chat, { id: string }>(
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
		t.nonNull.field("codeExamples", {
			type: "CodeExampleConnection",
			args: {
				after: stringArg(),
				before: stringArg(),
				first: intArg(),
				last: intArg(),
				orderBy: list(nonNull(arg({ type: "CodeExampleOrderByInput" }))),
				where: arg({ type: "CodeExampleWhereInput" })
			},
			resolve: async (parent, args, { prisma }) => {
				const connection = await PrismaUtils.findManyCursorConnection<
					CodeExample,
					{ id: string }
				>(
					(paginationArgs) =>
						prisma.user
							.findUnique({
								where: { id: parent.id }
							})
							.codeExamples({
								...paginationArgs,
								orderBy: PrismaUtils.nonNull(args.orderBy),
								where: PrismaUtils.nonNull(args.where)
							}),
					() =>
						prisma.user
							.findUnique({
								where: { id: parent.id },
								select: {
									_count: {
										select: {
											codeExamples: true
										}
									}
								}
							})
							.then((result) => result?._count.codeExamples ?? 0),
					{ ...PrismaUtils.handleRelayConnectionArgs(args, 100) },
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

				const connection = await PrismaUtils.findManyCursorConnection<
					Comment,
					{ id: string }
				>(
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
		t.nonNull.dateTime("createdAt");
		t.string("description");
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
				const connection = await PrismaUtils.findManyCursorConnection<
					Skill,
					{ id: string }
				>(
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
		t.nonNull.string("email", {
			authorize: (parent, args, { user }) => {
				return user?.id === parent.id;
			}
		});
		t.nonNull.field("experiences", {
			type: "ExperienceConnection",
			args: {
				after: stringArg(),
				before: stringArg(),
				first: intArg(),
				last: intArg(),
				orderBy: arg({ type: "ExperienceOrderByInput" }),
				where: arg({ type: "ExperienceWhereInput" })
			},
			resolve: async (parent, args, { prisma }) => {
				const connection = await PrismaUtils.findManyCursorConnection<
					Experience,
					{ id: string }
				>(
					(paginationArgs) =>
						prisma.user
							.findUnique({
								where: { id: parent.id }
							})
							.experiences({
								...paginationArgs,
								orderBy: PrismaUtils.nonNull(args.orderBy),
								where: PrismaUtils.nonNull(args.where)
							}),
					() =>
						prisma.user
							.findUnique({
								where: { id: parent.id },
								select: {
									_count: {
										select: {
											experiences: true
										}
									}
								}
							})
							.then((result) => result?._count.experiences ?? 0),
					{ ...PrismaUtils.handleRelayConnectionArgs(args) },
					{ ...PrismaUtils.handleRelayCursor() }
				);

				return connection;
			}
		});
		t.nonNull.field("followers", {
			type: "UserConnection",
			args: {
				after: stringArg(),
				before: stringArg(),
				first: intArg(),
				last: intArg(),
				orderBy: arg({ type: "FollowOrderByInput" }),
				where: arg({ type: "UserWhereInput" })
			},
			resolve: async (parent, args, { prisma }) => {
				const connection = await PrismaUtils.findManyCursorConnection<
					_User,
					{ id: string }
				>(
					(paginationArgs) =>
						prisma.user
							.findUnique({ where: { id: parent.id } })
							.followedBy({
								...paginationArgs,
								where: {
									following: { id: { equals: parent.id } },
									follower: PrismaUtils.nonNull(args.where)
								},
								orderBy: {
									follow: PrismaUtils.nonNull(args.orderBy)
								},
								include: { follower: true }
							})
							.then((items) => items.map((item) => item.follower)),
					() =>
						prisma.user
							.findUnique({
								where: { id: parent.id },
								select: {
									_count: { select: { followedBy: true } }
								}
							})
							.then((result) => result?._count.followedBy ?? 0),
					{ ...PrismaUtils.handleRelayConnectionArgs(args) },
					{ ...PrismaUtils.handleRelayCursor() }
				);

				return connection;
			}
		});
		t.nonNull.int("followersCount", {
			resolve: async (parent, args, { prisma }) => {
				return await prisma.user
					.findUnique({
						where: { id: parent.id },
						select: {
							_count: { select: { followedBy: true } }
						}
					})
					.then((result) => result?._count.followedBy ?? 0);
			}
		});
		t.nonNull.field("following", {
			type: "FollowConnection",
			args: {
				after: stringArg(),
				before: stringArg(),
				first: intArg(),
				last: intArg(),
				orderBy: arg({ type: "FollowOrderByInput" }),
				where: arg({ type: "FollowWhereInput" })
			},
			resolve: async (parent, args, { prisma }) => {
				const skillOnly: boolean = args.where?.type === "Skill";
				const userOnly: boolean = args.where?.type === "User";

				const where: Prisma.FollowWhereInput = {
					...(skillOnly ? { followingSkill: {} } : userOnly ? { followingUser: {} } : {}),
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

				const connection = await PrismaUtils.findManyCursorConnection<
					Follow,
					{ id: string }
				>(
					(paginationArgs) =>
						prisma.user
							.findUnique({
								where: { id: parent.id }
							})
							.follows({
								...paginationArgs,
								orderBy: PrismaUtils.nonNull(args.orderBy),
								where
							}),
					() =>
						prisma.user
							.findUnique({
								where: { id: parent.id },
								select: {
									_count: { select: { follows: true } }
								}
							})
							.then((result) => result?._count.follows ?? 0),
					{ ...PrismaUtils.handleRelayConnectionArgs(args) },
					{ ...PrismaUtils.handleRelayCursor() }
				);

				return connection;
			}
		});
		t.nonNull.int("followingCount", {
			resolve: async (parent, args, { prisma }) => {
				return await prisma.user
					.findUnique({
						where: { id: parent.id },
						select: {
							_count: { select: { follows: true } }
						}
					})
					.then((result) => result?._count.follows ?? 0);
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
				const friendedByIds = await prisma.user
					.findUnique({ where: { id: parent.id } })
					.friendedBy({
						where: {
							...PrismaUtils.nonNull(args.where),
							rejectedAt: { equals: null }
						},
						select: {
							frienderId: true
						}
					})
					.then((items) => items.map((item) => item.frienderId));

				const where: Prisma.FriendshipWhereInput = {
					friender: { id: { in: friendedByIds } },
					friending: {
						id: { equals: parent.id },
						friending: {
							none: {
								friending: { id: { in: friendedByIds } }
							}
						}
					},
					rejectedAt: { equals: null }
				};

				const connection = await PrismaUtils.findManyCursorConnection<
					_User,
					{ id: string }
				>(
					async ({ cursor, skip, take }) =>
						await prisma.user
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
		t.nonNull.int("friendRequestsReceivedCount", {
			resolve: async (parent, args, { prisma }) => {
				const friendedByIds = await prisma.user
					.findUnique({ where: { id: parent.id } })
					.friendedBy({
						where: {
							rejectedAt: { equals: null }
						},
						select: {
							frienderId: true
						}
					})
					.then((items) => items.map((item) => item.frienderId));

				const where: Prisma.FriendshipWhereInput = {
					friender: { id: { in: friendedByIds } },
					friending: {
						id: { equals: parent.id },
						friending: {
							none: {
								friending: { id: { in: friendedByIds } }
							}
						}
					},
					rejectedAt: { equals: null }
				};

				return await prisma.friendship.count({ where });
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

				const connection = await PrismaUtils.findManyCursorConnection<
					_User,
					{ id: string }
				>(
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
				const where: Prisma.FriendshipWhereInput = {
					friender: { id: { equals: parent.id } },
					friending: {
						...PrismaUtils.nonNull(args.where),
						friending: {
							some: {
								friending: { id: { equals: parent.id } }
							}
						}
					},
					rejectedAt: { equals: null }
				};

				const connection = await PrismaUtils.findManyCursorConnection<
					_User,
					{ id: string }
				>(
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
		t.nonNull.int("friendsCount", {
			resolve: async (parent, args, { prisma }) => {
				const where: Prisma.FriendshipWhereInput = {
					friender: { id: { equals: parent.id } },
					friending: {
						friending: {
							some: {
								friending: { id: { equals: parent.id } }
							}
						}
					},
					rejectedAt: { equals: null }
				};

				return await prisma.friendship.count({ where });
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
		t.implements("Node");
		t.string("image");
		t.nonNull.dateTime("messagesLastOpenedAt");
		t.nonNull.string("name");
		t.nonNull.int("newMessagesCount", {
			authorize: (parent, args, { user }) => {
				return parent.id === user?.id;
			},
			resolve: async (parent, args, { prisma }) => {
				return await prisma.notification.count({
					where: {
						chat: {},
						type: { equals: NotificationType.ChatMessageReceived },
						updatedAt: { gt: parent.messagesLastOpenedAt },
						user: { id: { equals: parent.id } }
					}
				});
			}
		});
		t.nonNull.int("newNotificationsCount", {
			authorize: (parent, args, { user }) => {
				return parent.id === user?.id;
			},
			resolve: async (parent, args, { prisma }) => {
				return await prisma.notification.count({
					where: {
						type: { not: { equals: NotificationType.ChatMessageReceived } },
						updatedAt: { gt: parent.notificationsLastOpenedAt },
						user: { id: { equals: parent.id } },
						OR: [
							{
								type: NotificationType.CodeExampleCommented,
								codeExample: {}
							},
							{
								type: NotificationType.FriendshipAccepted,
								friendship: {}
							},
							{
								type: NotificationType.PostCommented,
								post: {}
							}
						]
					}
				});
			}
		});
		t.nonNull.field("notifications", {
			type: "NotificationConnection",
			args: {
				first: intArg(),
				last: intArg(),
				after: stringArg(),
				before: stringArg(),
				where: arg({ type: "NotificationWhereInput" })
			},
			authorize: (parent, args, { user }) => {
				return parent.id === user?.id;
			},
			resolve: async (parent, args, { prisma }) => {
				const lastOpenedAt =
					args.where?.opened === false ? parent.notificationsLastOpenedAt : undefined;

				const where: Prisma.NotificationWhereInput = {
					type: { not: { equals: NotificationType.ChatMessageReceived } },
					updatedAt: { gt: lastOpenedAt },
					OR: [
						{
							type: NotificationType.CodeExampleCommented,
							codeExample: {}
						},
						{
							type: NotificationType.FriendshipAccepted,
							friendship: {}
						},
						{
							type: NotificationType.PostCommented,
							post: {}
						}
					]
				};

				const connection = await PrismaUtils.findManyCursorConnection<any, { id: string }>(
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
										where,
										orderBy: [{ updatedAt: "desc" }]
									})
									.then((items) => {
										return items.map((item) => ({
											__typename: `Notification${item.type}`,
											...item
										}));
									}),
					() => prisma.notification.count({ where }),
					{ ...PrismaUtils.handleRelayConnectionArgs(args) },
					{ ...PrismaUtils.handleRelayCursor() }
				);

				return connection;
			}
		});
		t.nonNull.dateTime("notificationsLastOpenedAt");
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
				const where: Prisma.PostWhereInput = {
					author: { id: { equals: parent.id } },
					AND: [
						{ urlSlug: { not: { equals: "draft" } } },
						{
							...PrismaUtils.nonNull(args.where),
							...(args.where?.skills
								? {
										skills: {
											every: args.where.skills.every
												? {
														skill: PrismaUtils.nonNull(
															args.where?.skills?.every
														)
												  }
												: undefined,
											none: args.where.skills.none
												? {
														skill: PrismaUtils.nonNull(
															args.where?.skills?.none
														)
												  }
												: undefined,
											some: args.where.skills.some
												? {
														skill: PrismaUtils.nonNull(
															args.where?.skills?.some
														)
												  }
												: undefined
										}
								  }
								: {})
						}
					]
				};

				const connection = await PrismaUtils.findManyCursorConnection<Post, { id: string }>(
					async ({ cursor, skip, take }) =>
						take === 0
							? await Promise.resolve([])
							: await prisma.user.findUnique({ where: { id: parent.id } }).posts({
									cursor,
									skip,
									take,
									where,
									orderBy: {
										createdAt: Prisma.SortOrder.desc
									}
							  }),
					() => prisma.post.count({ where }),
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
		t.nonNull.field("repositories", {
			type: "RepositoryConnection",
			args: {
				after: stringArg(),
				before: stringArg(),
				first: intArg(),
				last: intArg(),
				where: arg({ type: "RepositoryWhereInput" })
			},
			resolve: async (parent, args, { prisma }) => {
				const connection = await PrismaUtils.findManyCursorConnection<
					Repository,
					{ id: string }
				>(
					(paginationArgs) =>
						prisma.user
							.findUnique({
								where: { id: parent.id }
							})
							.repositories({
								...paginationArgs,
								where: PrismaUtils.nonNull(args.where)
							}),
					() =>
						prisma.user
							.findUnique({
								where: { id: parent.id },
								select: {
									_count: {
										select: {
											repositories: true
										}
									}
								}
							})
							.then((result) => result?._count.repositories ?? 0),
					{ ...PrismaUtils.handleRelayConnectionArgs(args) },
					{ ...PrismaUtils.handleRelayCursor() }
				);

				return connection;
			}
		});
		t.nonNull.field("role", { type: "UserRole" });
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
				const connection = await PrismaUtils.findManyCursorConnection<
					Skill,
					{ id: string }
				>(
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
		t.nonNull.field("trophies", {
			type: "UserTrophies",
			resolve: (parent) => {
				return { id: parent.id };
			}
		});
		t.nonNull.field("upvotedCodeExamples", {
			type: "CodeExampleConnection",
			description: stripIndents`
				Code examples this user has upvoted
			`,
			args: {
				after: stringArg(),
				before: stringArg(),
				first: intArg(),
				last: intArg(),
				orderBy: list(nonNull(arg({ type: "CodeExampleOrderByInput" }))),
				where: arg({ type: "CodeExampleWhereInput" })
			},
			resolve: async (parent, args, { prisma }) => {
				const connection = await PrismaUtils.findManyCursorConnection<
					CodeExample,
					{ id: string }
				>(
					(paginationArgs) =>
						prisma.user
							.findUnique({
								where: { id: parent.id }
							})
							.upvotedCodeExamples({
								...paginationArgs,
								orderBy: args.orderBy?.map((orderBy) => ({
									codeExample: PrismaUtils.nonNull(orderBy)
								})),
								where: { codeExample: PrismaUtils.nonNull(args.where) },
								select: { codeExample: true }
							})
							.then((items) => items.map((item) => item.codeExample)),
					() =>
						prisma.codeExampleUpvoter.count({
							where: {
								user: { id: parent.id },
								codeExample: PrismaUtils.nonNull(args.where)
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
				const where: Prisma.PostWhereInput = {
					...PrismaUtils.nonNull(args.where),
					...(args.where?.skills
						? {
								skills: {
									every: {
										skill: PrismaUtils.nonNull(args.where?.skills?.every)
									},
									none: {
										skill: PrismaUtils.nonNull(args.where?.skills?.none)
									},
									some: {
										skill: PrismaUtils.nonNull(args.where?.skills?.some)
									}
								}
						  }
						: {})
				};

				const connection = await PrismaUtils.findManyCursorConnection<Post, { id: string }>(
					(paginationArgs) =>
						prisma.user
							.findUnique({
								where: { id: parent.id }
							})
							.upvotedPosts({
								...paginationArgs,
								where: { post: where },
								select: { post: true }
							})
							.then((posts) => posts.map((p) => p.post)),
					() =>
						prisma.postUpvoter.count({
							where: {
								user: { id: parent.id },
								post: where
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
