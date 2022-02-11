import { NexusPrisma } from "@makepurple/prisma/nexus";
import { ChatMessage, User } from "@prisma/client";
import { arg, intArg, objectType, stringArg } from "nexus";
import { PrismaUtils } from "../../../utils";

export const Chat = objectType({
	name: NexusPrisma.Chat.$name,
	description: NexusPrisma.Chat.$description,
	definition: (t) => {
		t.field(NexusPrisma.Chat.id);
		t.nonNull.field("messages", {
			type: "ChatMessageConnection",
			args: {
				after: stringArg(),
				before: stringArg(),
				first: intArg(),
				last: intArg(),
				offset: intArg()
			},
			authorize: async (parent, args, { prisma, user }) => {
				if (!user) return false;

				const chat = await prisma.chatsOnUsers
					.findUnique({
						where: {
							chatId_userId: {
								chatId: parent.id,
								userId: user.id
							}
						}
					})
					.chat();

				if (chat?.id !== parent.id) return false;

				return true;
			},
			resolve: async (parent, args, { prisma, user }) => {
				if (!user) throw new Error();

				const connection = await PrismaUtils.findManyCursorConnection<
					ChatMessage,
					{ id: string }
				>(
					({ cursor, skip, take }) =>
						prisma.chatsOnUsers
							.findUnique({
								where: {
									chatId_userId: {
										chatId: parent.id,
										userId: user.id
									}
								}
							})
							.chat()
							.messages({
								cursor,
								skip: (args.offset ?? 0) + (skip ?? 0),
								take,
								orderBy: { createdAt: "desc" }
							}),
					() =>
						prisma.chatsOnUsers
							.findUnique({
								where: {
									chatId_userId: {
										chatId: parent.id,
										userId: user.id
									}
								}
							})
							.chat({
								include: { _count: { select: { messages: true } } }
							})
							.then((result) => result?._count.messages ?? 0),
					{ ...PrismaUtils.handleRelayConnectionArgs(args) },
					{ ...PrismaUtils.handleRelayCursor() }
				);

				return connection;
			}
		});
		t.field(NexusPrisma.Chat.updatedAt);
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
				const connection = await PrismaUtils.findManyCursorConnection<User, { id: string }>(
					(paginationArgs) =>
						prisma.chat
							.findUnique({ where: { id: parent.id } })
							.users({
								...paginationArgs,
								where: {
									user: PrismaUtils.nonNull(args.where)
								},
								include: { user: true }
							})
							.then((items) => items.map((item) => item.user)),
					() =>
						prisma.chat
							.findUnique({
								where: { id: parent.id },
								include: { _count: { select: { users: true } } }
							})
							.then((result) => result?._count.users ?? 0),
					{ ...PrismaUtils.handleRelayConnectionArgs(args) },
					{ ...PrismaUtils.handleRelayCursor() }
				);

				return connection;
			}
		});
	}
});
