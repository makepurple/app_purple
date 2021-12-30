import { findManyCursorConnection } from "@devoxa/prisma-relay-cursor-connection";
import { NexusPrisma } from "@makepurple/prisma/nexus";
import { Comment as _Comment, User } from "@prisma/client";
import { arg, intArg, objectType, stringArg } from "nexus";
import { PrismaUtils } from "../../../utils";

export const Comment = objectType({
	name: NexusPrisma.Comment.$name,
	description: NexusPrisma.Comment.$description,
	definition: (t) => {
		t.field(NexusPrisma.Comment.author);
		t.field(NexusPrisma.Comment.authorId);
		t.field(NexusPrisma.Comment.content);
		t.field(NexusPrisma.Comment.createdAt);
		t.field(NexusPrisma.Comment.id);
		t.field(NexusPrisma.Comment.parent);
		t.field(NexusPrisma.Comment.parentId);
		t.field(NexusPrisma.Comment.post);
		t.field(NexusPrisma.Comment.postId);
		t.nonNull.field("replies", {
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
				const comment = prisma.comment.findUnique({ where: { id: parent.id } });

				const connection = await findManyCursorConnection<_Comment, { id: string }>(
					(paginationArgs) =>
						comment.replies({
							...paginationArgs,
							where: PrismaUtils.nonNull(args.where),
							orderBy: PrismaUtils.nonNull(args.orderBy)
						}),
					() => prisma.comment.count(),
					{ ...PrismaUtils.handleRelayConnectionArgs(args) },
					{ ...PrismaUtils.handleRelayCursor }
				);

				return connection;
			}
		});
		t.field(NexusPrisma.Comment.updatedAt);
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

				const connection = await findManyCursorConnection<User, { id: string }>(
					(paginationArgs) =>
						comment
							.upvoters({
								...paginationArgs,
								where: { user: PrismaUtils.nonNull(args.where) },
								include: { user: true }
							})
							.then((upvoters) => upvoters.map((upvoter) => upvoter.user)),
					() =>
						prisma.commentUpvoter.count({
							where: { user: PrismaUtils.nonNull(args.where) }
						}),
					{ ...PrismaUtils.handleRelayConnectionArgs(args) },
					{ ...PrismaUtils.handleRelayCursor }
				);

				return connection;
			}
		});
		t.nonNull.int("upvotes", {
			resolve: async (parent, args, { prisma }) => {
				return await prisma.commentUpvoter.count({
					where: {
						commentId: parent.id
					}
				});
			}
		});
	}
});
