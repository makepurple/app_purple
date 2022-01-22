import { ChatMessageContent } from "@makepurple/validators";
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

		const record = await prisma.chatMessage.create({
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
			}
		});

		if (!record) throw new Error();

		await pusher.trigger(`chat:${chat.id}`, "chat-message-event", {
			sender: user.id,
			message: record.id
		});

		return { record };
	}
});
