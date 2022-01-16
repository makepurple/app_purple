import { findManyCursorConnection } from "@devoxa/prisma-relay-cursor-connection";
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

				const connection = await findManyCursorConnection<ChatMessage, { id: string }>(
					(paginationArgs) =>
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
							.messages({ ...paginationArgs }),
					() =>
						prisma.chatMessage.count({
							where: {
								chat: { id: { equals: parent.id } }
							}
						}),
					{ ...PrismaUtils.handleRelayConnectionArgs(args) },
					{ ...PrismaUtils.handleRelayCursor() }
				);

				return connection;
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
			resolve: async (parent, args, { prisma }) => {
				const connection = await findManyCursorConnection<User, { id: string }>(
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
						prisma.chatsOnUsers.count({
							where: {
								chat: { id: { equals: parent.id } },
								user: PrismaUtils.nonNull(args.where)
							}
						}),
					{ ...PrismaUtils.handleRelayConnectionArgs(args) },
					{ ...PrismaUtils.handleRelayCursor() }
				);

				return connection;
			}
		});
	}
});
