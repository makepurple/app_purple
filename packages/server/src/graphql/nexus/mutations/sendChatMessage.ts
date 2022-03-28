import { ChatMessageContent } from "@makepurple/validators";
import { NotificationType } from "@prisma/client";
import { arg, mutationField, nonNull } from "nexus";
import { NotFoundError, PrismaUtils } from "../../../utils";

export const sendChatMessage = mutationField("sendChatMessage", {
	type: nonNull("SendChatMessagePayload"),
	args: {
		data: nonNull(arg({ type: "ChatMessageCreateInput" })),
		where: nonNull(arg({ type: "ChatWhereUniqueInput" }))
	},
	authorize: (parent, args, { user }) => {
		return !!user;
	},
	resolve: async (parent, args, { prisma, pusher, user }) => {
		if (!user) throw new Error();

		const contentInput = ChatMessageContent.validator(args.data.content);

		const chat = await prisma.chat.findUnique({
			where: PrismaUtils.nonNull(args.where)
		});

		if (!chat) throw new NotFoundError("This chat could not be found");

		const record = await prisma.$transaction(async (transaction) => {
			const result = await transaction.chatMessage.create({
				data: {
					chat: {
						connect: {
							id: chat.id
						}
					},
					content: contentInput,
					sender: {
						connect: {
							id: user.id
						}
					}
				},
				include: {
					chat: {
						include: {
							users: {
								where: {
									/**
									 * @description Get users that aren't the viewer, and haven't
									 * ever received a notification for this chat. We will create
									 * notifications for these users, and update the notifications
									 * for the other users.
									 * @author David Lee
									 * @date March 27, 2022
									 */
									user: {
										id: { not: { equals: user.id } },
										notifications: {
											none: {
												type: NotificationType.ChatMessageReceived,
												chat: { id: { equals: chat.id } }
											}
										}
									}
								}
							}
						}
					}
				}
			});

			await transaction.chat.update({
				where: {
					id: chat.id
				},
				data: {
					notifications: {
						updateMany: {
							where: {
								chatId: chat.id,
								type: NotificationType.ChatMessageReceived,
								userId: {
									notIn: result.chat.users.map(
										(participant) => participant.userId
									),
									not: { equals: user.id }
								}
							},
							data: {
								updatedAt: new Date()
							}
						},
						createMany: {
							data: result.chat.users.map((participant) => ({
								type: NotificationType.ChatMessageReceived,
								userId: participant.userId
							}))
						}
					}
				}
			});

			return result;
		});

		if (!record) throw new Error();

		await pusher.trigger(`chat@${chat.id}`, "chat-message-event", {
			sender: user.id,
			message: record.id
		});

		return { record };
	}
});
