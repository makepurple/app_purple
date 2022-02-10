import { findManyCursorConnection } from "@devoxa/prisma-relay-cursor-connection";
import { NexusPrisma } from "@makepurple/prisma/nexus";
import { Comment, Skill, User } from "@prisma/client";
import { stripIndents } from "common-tags";
import { arg, intArg, objectType, stringArg } from "nexus";
import { PrismaUtils } from "../../../utils";

export const Post = objectType({
	name: NexusPrisma.Post.$name,
	description: NexusPrisma.Post.$description,
	definition: (t) => {
		t.field(NexusPrisma.Post.author);
		t.field(NexusPrisma.Post.authorName);
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
				const post = prisma.post.findUnique({ where: { id: parent.id } });

				const connection = await findManyCursorConnection<Comment, { id: string }>(
					(paginationArgs) =>
						post.comments({
							...paginationArgs,
							where: PrismaUtils.nonNull(args.where),
							orderBy: PrismaUtils.nonNull(args.orderBy)
						}),
					() => prisma.comment.count(),
					{ ...PrismaUtils.handleRelayConnectionArgs(args) },
					{ ...PrismaUtils.handleRelayCursor() }
				);

				return connection;
			}
		});
		t.field(NexusPrisma.Post.content);
		t.field(NexusPrisma.Post.createdAt);
		t.field(NexusPrisma.Post.description);
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

				const connection = await findManyCursorConnection<User, { id: string }>(
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
		t.field(NexusPrisma.Post.id);
		t.field(NexusPrisma.Post.images);
		t.field(NexusPrisma.Post.publishedAt);
		t.field(NexusPrisma.Post.readTime);
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
				const connection = await findManyCursorConnection<Skill, { id: string }>(
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
		t.field(NexusPrisma.Post.thumbnailUrl);
		t.field(NexusPrisma.Post.title);
		t.field(NexusPrisma.Post.updatedAt);
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
				const connection = await findManyCursorConnection<User, { id: string }>(
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
		t.field(NexusPrisma.Post.urlSlug);
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
				const connection = await findManyCursorConnection<User, { id: string }>(
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
									_count: {
										select: {
											viewers: true
										}
									}
								}
							})
							.then((result) => result?._count.viewers ?? 0),
					{ ...PrismaUtils.handleRelayConnectionArgs(args) },
					{ ...PrismaUtils.handleRelayCursor() }
				);

				return connection;
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
