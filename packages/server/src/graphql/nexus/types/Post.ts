import { ObjectUtils } from "@makepurple/utils";
import type { Comment, Prisma, Skill, User } from "@prisma/client";
import { stripIndents } from "common-tags";
import { arg, intArg, objectType, stringArg } from "nexus";
import { PrismaUtils } from "../../../utils";

/**
 * !HACK
 * @description I pulled this number of out my ass. I like powers of 2.
 * @author David Lee
 * @date March 12, 2022
 */
const READING_WORDS_PER_MINUTE = 256;

export const Post = objectType({
	name: "Post",
	sourceType: {
		module: "@prisma/client",
		export: "Post"
	},
	definition: (t) => {
		t.nonNull.field("author", {
			type: "User",
			resolve: (parent, args, { prisma }) => {
				return prisma.user.findUnique({
					where: {
						name: parent.authorName
					},
					rejectOnNotFound: true
				});
			}
		});
		t.nonNull.string("authorName");
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
				const connection = await PrismaUtils.findManyCursorConnection<
					Comment,
					{ id: string }
				>(
					(paginationArgs) =>
						prisma.post
							.findUnique({
								where: { id: parent.id }
							})
							.comments({
								...paginationArgs,
								where: {
									...PrismaUtils.nonNull(args.where),
									parent: {
										is: null
									}
								},
								orderBy: PrismaUtils.nonNull(args.orderBy)
							}),
					() =>
						prisma.post
							.findUnique({
								where: { id: parent.id },
								select: {
									_count: { select: { comments: true } }
								}
							})
							.then((result) => result?._count.comments ?? 0),
					{ ...PrismaUtils.handleRelayConnectionArgs(args) },
					{ ...PrismaUtils.handleRelayCursor() }
				);

				return connection;
			}
		});
		t.nonNull.list.nonNull.json("content", {
			resolve: (parent) => {
				/**
				 * !HACK
				 * @description The underlying type in the DB is a Json, but we're expecting a
				 * json array. Casting to json[] in the resolver, which may break if the
				 * field ever returns a different data shape
				 * @author David Lee
				 * @date April 3, 2022
				 */
				return parent.content as Prisma.JsonArray[];
			}
		});
		t.nonNull.dateTime("createdAt");
		t.string("description");
		t.nonNull.field("downvoters", {
			type: "UserConnection",
			args: {
				after: stringArg(),
				before: stringArg(),
				first: intArg(),
				last: intArg(),
				where: arg({ type: "UserWhereInput" })
			},
			resolve: async (parent, args, { prisma }) => {
				const post = prisma.post.findUnique({
					where: { id: parent.id }
				});

				const connection = await PrismaUtils.findManyCursorConnection<User, { id: string }>(
					(paginationArgs) =>
						post
							.upvoters({
								...paginationArgs,
								where: {
									upvote: false,
									user: PrismaUtils.nonNull(args.where)
								},
								include: { user: true }
							})
							.then((upvoters) => upvoters.map((upvoter) => upvoter.user)),
					() =>
						prisma.postUpvoter.count({
							where: { user: PrismaUtils.nonNull(args.where) }
						}),
					{ ...PrismaUtils.handleRelayConnectionArgs(args) },
					{ ...PrismaUtils.handleRelayCursor() }
				);

				return connection;
			}
		});
		t.implements("Node");
		t.nonNull.list.nonNull.field("images", {
			type: "PostImage",
			resolve: (parent, args, { prisma }) => {
				return prisma.postImage.findMany({});
			}
		});
		t.dateTime("publishedAt");
		t.nonNull.int("readTime", {
			description: stripIndents`
				Estimated time in minutes it will take to read this post. Minimum 1 minute.
			`,
			resolve: (parent) => {
				const content = parent.content as readonly Json[];
				const wordCount = ObjectUtils.getWordCount(content);
				const estimatedMinutes = Math.round(wordCount / READING_WORDS_PER_MINUTE);
				const readingMinutes = Math.max(1, estimatedMinutes);

				return readingMinutes;
			}
		});
		t.nonNull.field("skills", {
			type: "SkillConnection",
			args: {
				after: stringArg(),
				before: stringArg(),
				first: intArg(),
				last: intArg(),
				where: arg({ type: "SkillWhereInput" })
			},
			resolve: async (parent, args, { prisma }) => {
				const connection = await PrismaUtils.findManyCursorConnection<
					Skill,
					{ id: string }
				>(
					(paginationArgs) =>
						prisma.post
							.findUnique({ where: { id: parent.id } })
							.skills({
								...paginationArgs,
								where: PrismaUtils.nonNull(args.where),
								include: { skill: true }
							})
							.then((items) => items.map((item) => item.skill)),
					() =>
						prisma.skillsOnPosts.count({
							where: {
								post: { id: { equals: parent.id } },
								skill: PrismaUtils.nonNull(args.where)
							}
						}),
					{ ...PrismaUtils.handleRelayConnectionArgs(args) },
					{ ...PrismaUtils.handleRelayCursor() }
				);

				return connection;
			}
		});
		t.nonNull.int("skillsCount", {
			resolve: async (parent, args, { prisma }) => {
				return await prisma.post
					.findUnique({
						where: { id: parent.id },
						select: {
							_count: {
								select: {
									skills: true
								}
							}
						},
						rejectOnNotFound: true
					})
					.then((result) => result._count.skills);
			}
		});
		t.string("thumbnailUrl");
		t.nonNull.string("title");
		t.nonNull.dateTime("updatedAt");
		t.nonNull.int("upvotes", {
			resolve: async (parent, args, { prisma }) => {
				const groups = await prisma.postUpvoter.groupBy({
					_count: true,
					by: ["upvote"],
					where: { postId: parent.id }
				});

				const upvotes = groups.find((group) => group.upvote)?._count ?? 0;
				const downvotes = groups.find((group) => !group.upvote)?._count ?? 0;

				return upvotes - downvotes;
			}
		});
		t.nonNull.field("upvoters", {
			type: "UserConnection",
			args: {
				after: stringArg(),
				before: stringArg(),
				first: intArg(),
				last: intArg(),
				where: arg({ type: "UserWhereInput" })
			},
			resolve: async (parent, args, { prisma }) => {
				const connection = await PrismaUtils.findManyCursorConnection<User, { id: string }>(
					(paginationArgs) =>
						prisma.post
							.findUnique({
								where: { id: parent.id }
							})
							.upvoters({
								...paginationArgs,
								where: {
									upvote: true,
									user: PrismaUtils.nonNull(args.where)
								},
								include: { user: true }
							})
							.then((upvoters) => upvoters.map((upvoter) => upvoter.user)),
					() =>
						prisma.post
							.findUnique({
								where: { id: parent.id },
								include: {
									_count: {
										select: {
											upvoters: true
										}
									}
								}
							})
							.then((result) => result?._count.upvoters ?? 0),
					{ ...PrismaUtils.handleRelayConnectionArgs(args) },
					{ ...PrismaUtils.handleRelayCursor() }
				);

				return connection;
			}
		});
		t.nonNull.string("urlSlug");
		t.nonNull.field("viewers", {
			type: "UserConnection",
			args: {
				after: stringArg(),
				before: stringArg(),
				first: intArg(),
				last: intArg(),
				where: arg({ type: "UserWhereInput" })
			},
			resolve: async (parent, args, { prisma }) => {
				const connection = await PrismaUtils.findManyCursorConnection<User, { id: string }>(
					(paginationArgs) =>
						prisma.post
							.findUnique({
								where: { id: parent.id }
							})
							.viewers({
								...paginationArgs,
								where: {
									user: {
										...PrismaUtils.nonNull(args.where)
									}
								},
								include: { user: true }
							})
							// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
							.then((upvoters) => upvoters.map((upvoter) => upvoter.user!)),
					() =>
						prisma.post
							.findUnique({
								where: { id: parent.id },
								include: {
									_count: { select: { viewers: true } }
								}
							})
							.then((result) => result?._count.viewers ?? 0),
					{ ...PrismaUtils.handleRelayConnectionArgs(args) },
					{ ...PrismaUtils.handleRelayCursor() }
				);

				return connection;
			}
		});
		t.nonNull.int("viewersCount", {
			resolve: async (parent, args, { prisma }) => {
				return await prisma.post
					.findUnique({
						where: { id: parent.id },
						include: {
							_count: { select: { viewers: true } }
						}
					})
					.then((result) => result?._count.viewers ?? 0);
			}
		});
		t.boolean("viewerUpvote", {
			description: stripIndents`
				How the viewer has voted on this post.

				true: upvoted
				false: downvoted
				null: didn't vote
			`,
			resolve: async (parent, args, { prisma, user }) => {
				if (!user) return null;

				const postUpvoter = await prisma.postUpvoter.findUnique({
					where: {
						userId_postId: {
							postId: parent.id,
							userId: user.id
						}
					}
				});

				return postUpvoter?.upvote ?? null;
			}
		});
	}
});
