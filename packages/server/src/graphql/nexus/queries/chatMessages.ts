import { stripIndents } from "common-tags";
import { arg, list, nonNull, queryField } from "nexus";
import { PrismaUtils } from "../../../utils";

export const chatMessages = queryField("chatMessages", {
	type: nonNull(list(nonNull("ChatMessage"))),
	description: stripIndents`
		This is to update a subscribed chat with new messages when received.
	`,
	args: {
		where: nonNull(arg({ type: "ChatMessageWhereInput" }))
	},
	authorize: (parent, args, { user }) => {
		return !!user;
	},
	resolve: async (parent, args, { prisma, user }) => {
		if (!user) throw new Error();

		return await prisma.chatsOnUsers
			.findUnique({
				where: {
					chatId_userId: {
						chatId: args.where.chatId,
						userId: user.id
					}
				}
			})
			.chat()
			.messages({
				where: {
					id: PrismaUtils.nonNull(args.where.id)
				}
			});
	}
});
