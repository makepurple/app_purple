import { ChatMessage, User } from "@prisma/client";
import { arg, intArg, objectType, stringArg } from "nexus";
import { PrismaUtils } from "../../../utils";

export const Chat = objectType({
	name: "Chat",
	definition: (t) => {
		t.implements("Node");
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
		t.nonNull.int("newMessagesCount", {
			authorize: (parent, args, { user }) => {
				return !!user;
			},
			resolve: async (parent, args, { prisma, user }) => {
				if (!user) throw new Error();

				const lastOpenedAt = await prisma.user
					.findUnique({
						where: { id: user.id },
						select: { messagesLastOpenedAt: true }
					})
					.then((result) => result?.messagesLastOpenedAt);

				return await prisma.chatMessage.count({
					where: {
						chat: { id: { equals: parent.id } },
						createdAt: { gt: lastOpenedAt }
					}
				});
			}
		});
		t.nonNull.boolean("opened", {
			authorize: (parent, args, { user }) => {
				return !!user;
			},
			resolve: async (parent, args, { prisma, user }) => {
				if (!user) throw new Error();

				const lastOpenedAt = await prisma.user
					.findUnique({
						where: { id: user.id },
						select: { messagesLastOpenedAt: true }
					})
					.then((result) => result?.messagesLastOpenedAt);

				return !!lastOpenedAt && lastOpenedAt >= parent.updatedAt;
			}
		});
		t.nonNull.dateTime("updatedAt");
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
