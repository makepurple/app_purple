import { Comment as _Comment, User } from "@prisma/client";
import { stripIndents } from "common-tags";
import { arg, intArg, objectType, stringArg } from "nexus";
import { PrismaUtils } from "../../../utils";

export const Comment = objectType({
	name: "Comment",
	sourceType: {
		module: "@prisma/client",
		export: "Comment"
	},
	definition: (t) => {
		t.field("author", {
			type: "User",
			resolve: (parent, args, { prisma }) => {
				if (!parent.authorId) return null;

				return prisma.user.findUnique({
					where: {
						id: parent.authorId
					},
					rejectOnNotFound: true
				});
			}
		});
		t.string("authorId");
		t.field("codeExample", {
			type: "CodeExample",
			resolve: (parent, args, { prisma }) => {
				if (!parent.codeExampleId) return null;

				return prisma.codeExample.findUnique({
					where: {
						id: parent.codeExampleId
					}
				});
			}
		});
		t.string("codeExampleId");
		t.list.nonNull.json("content");
		t.nonNull.dateTime("createdAt");
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
				const comment = prisma.comment.findUnique({
					where: { id: parent.id }
				});

				const connection = await PrismaUtils.findManyCursorConnection<User, { id: string }>(
					(paginationArgs) =>
						comment
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
						prisma.commentUpvoter.count({
							where: { user: PrismaUtils.nonNull(args.where) }
						}),
					{ ...PrismaUtils.handleRelayConnectionArgs(args) },
					{ ...PrismaUtils.handleRelayCursor() }
				);

				return connection;
			}
		});
		t.implements("Node");
		t.field("parent", {
			type: "Comment",
			resolve: (parent, args, { prisma }) => {
				if (!parent.parentId) return null;

				return prisma.comment.findUnique({
					where: {
						id: parent.parentId
					}
				});
			}
		});
		t.string("parentId");
		t.field("post", {
			type: "Post",
			resolve: (parent, args, { prisma }) => {
				if (!parent.postId) return null;

				return prisma.post.findUnique({
					where: {
						id: parent.postId
					}
				});
			}
		});
		t.string("postId");
		t.nonNull.field("replies", {
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
				const comment = prisma.comment.findUnique({ where: { id: parent.id } });

				const connection = await PrismaUtils.findManyCursorConnection<
					_Comment,
					{ id: string }
				>(
					(paginationArgs) =>
						comment.replies({
							...paginationArgs,
							where: PrismaUtils.nonNull(args.where),
							orderBy: PrismaUtils.nonNull(args.orderBy)
						}),
					() =>
						prisma.comment
							.findUnique({
								where: { id: parent.id },
								select: {
									_count: { select: { replies: true } }
								}
							})
							.then((result) => result?._count.replies ?? 0),
					{ ...PrismaUtils.handleRelayConnectionArgs(args) },
					{ ...PrismaUtils.handleRelayCursor() }
				);

				return connection;
			}
		});
		t.nonNull.int("repliesCount", {
			resolve: async (parent, args, { prisma }) => {
				return await prisma.comment
					.findUnique({
						where: { id: parent.id },
						select: {
							_count: { select: { replies: true } }
						}
					})
					.then((result) => result?._count.replies ?? 0);
			}
		});
		t.nonNull.dateTime("updatedAt");
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
				const comment = prisma.comment.findUnique({
					where: { id: parent.id }
				});

				const connection = await PrismaUtils.findManyCursorConnection<User, { id: string }>(
					(paginationArgs) =>
						comment
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
						prisma.commentUpvoter.count({
							where: { user: PrismaUtils.nonNull(args.where) }
						}),
					{ ...PrismaUtils.handleRelayConnectionArgs(args) },
					{ ...PrismaUtils.handleRelayCursor() }
				);

				return connection;
			}
		});
		t.nonNull.int("upvotes", {
			resolve: async (parent, args, { prisma }) => {
				const upvotes = await prisma.commentUpvoter.count({
					where: {
						commentId: parent.id,
						upvote: true
					}
				});

				const downvotes = await prisma.commentUpvoter.count({
					where: {
						commentId: parent.id,
						upvote: false
					}
				});

				return upvotes - downvotes;
			}
		});
		t.boolean("viewerUpvote", {
			description: stripIndents`
				How the viewer has voted on this comment.

				true: upvoted
				false: downvoted
				null: didn't vote
			`,
			resolve: async (parent, args, { prisma, user }) => {
				if (!user) return null;

				const commentUpvoter = await prisma.commentUpvoter.findUnique({
					where: {
						commentId_userId: {
							commentId: parent.id,
							userId: user.id
						}
					}
				});

				return commentUpvoter?.upvote ?? null;
			}
		});
	}
});
