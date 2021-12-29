import { findManyCursorConnection } from "@devoxa/prisma-relay-cursor-connection";
import { NexusPrisma } from "@makepurple/prisma/nexus";
import { Comment as _Comment } from "@prisma/client";
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
				where: arg({ type: "CommentWhereInput" })
			},
			resolve: async (parent, args, { prisma }) => {
				const connection = await findManyCursorConnection<_Comment, { id: number }>(
					(paginationArgs) =>
						prisma.comment.findMany({
							...paginationArgs,
							where: PrismaUtils.nonNull(args.where)
						}),
					() => prisma.comment.count(),
					{ ...PrismaUtils.handleRelayConnectionArgs(args) },
					{ ...PrismaUtils.handleRelayCursor }
				);

				return connection;
			}
		});
		t.field(NexusPrisma.Comment.updatedAt);
	}
});
