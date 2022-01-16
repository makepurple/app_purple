import { arg, mutationField, nonNull } from "nexus";
import { NotFoundError, PrismaUtils } from "../../../utils";

export const sendChatMessage = mutationField("sendChatMessage", {
	type: nonNull("SendChatMessagePayload"),
	args: {
		data: nonNull(arg({ type: "SendChatMessageInput" })),
		where: nonNull(arg({ type: "ChatWhereUniqueInput" }))
	},
	authorize: (parent, args, { user }) => {
		return !!user;
	},
	resolve: async (parent, args, { prisma, user }) => {
		if (!user) throw new Error();

		const chat = await prisma.chat.findUnique({
			where: PrismaUtils.nonNull(args.where)
		});

		if (!chat) throw new NotFoundError("This chat could not be found");

		const record = await prisma.chatsOnUsers
			.update({
				where: {
					chatId_userId: {
						chatId: chat.id,
						userId: user.id
					}
				},
				data: {
					chat: {
						update: {
							messages: {
								createMany: {
									data: args.data.messages.map((message) => ({
										content: message.content,
										senderId: user.id
									}))
								}
							}
						}
					}
				}
			})
			.chat({
				include: {
					messages: true
				}
			});

		if (!record) throw new Error();

		return { record };
	}
});
