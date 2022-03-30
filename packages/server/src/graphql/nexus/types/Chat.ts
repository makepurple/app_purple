import { ChatMessage, User } from "@prisma/client";
import { arg, intArg, objectType, stringArg } from "nexus";
import { PrismaUtils } from "../../../utils";

export const Chat = objectType({
	name: "Chat",
	definition: (t) => {
		t.implements("Node");
		t.nonNull.string("channelName", {
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

				return !!chat;
			},
			resolve: (parent) => {
				return `chat@${parent.id}`;
			}
		});
		t.nonNull.dateTime("lastOpenedAt", {
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

				return !!chat;
			},
			resolve: async (parent, args, { prisma, user }) => {
				if (!user) throw new Error();

				return await prisma.chatsOnUsers
					.findUnique({
						where: {
							chatId_userId: {
								chatId: parent.id,
								userId: user.id
							}
						},
						rejectOnNotFound: true
					})
					.then((result) => result.lastOpenedAt);
			}
		});
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

				return !!chat;
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
								skip,
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

				return !!chat;
			},
			resolve: async (parent, args, { prisma, user }) => {
				if (!user) throw new Error();

				const lastOpenedAt = await prisma.chatsOnUsers
					.findUnique({
						where: {
							chatId_userId: {
								chatId: parent.id,
								userId: user.id
							}
						},
						rejectOnNotFound: true
					})
					.then((result) => result.lastOpenedAt);

				return await prisma.chatMessage.count({
					where: {
						chat: { id: { equals: parent.id } },
						createdAt: { gt: lastOpenedAt },
						sender: { id: { not: { equals: user.id } } }
					}
				});
			}
		});
		t.nonNull.boolean("opened", {
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

				return !!chat;
			},
			resolve: async (parent, args, { prisma, user }) => {
				if (!user) throw new Error();

				const lastOpenedAt = await prisma.chatsOnUsers
					.findUnique({
						where: {
							chatId_userId: {
								chatId: parent.id,
								userId: user.id
							}
						},
						rejectOnNotFound: true
					})
					.then((result) => result.lastOpenedAt);

				return !!lastOpenedAt && lastOpenedAt >= parent.updatedAt;
			}
		});
		t.nonNull.dateTime("updatedAt", {
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

				return !!chat;
			}
		});
		t.nonNull.field("users", {
			type: "UserConnection",
			args: {
				after: stringArg(),
				before: stringArg(),
				first: intArg(),
				last: intArg(),
				where: arg({ type: "UserWhereInput" })
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

				return !!chat;
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
