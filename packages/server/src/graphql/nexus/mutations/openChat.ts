import { arg, mutationField, nonNull } from "nexus";
import { Logger, PrismaUtils } from "../../../utils";

export const openChat = mutationField("openChat", {
	type: nonNull("OpenChatPayload"),
	authorize: (parent, args, { user }) => {
		return !!user;
	},
	args: {
		where: nonNull(arg({ type: "ChatWhereUniqueInput" }))
	},
	resolve: async (parent, args, { prisma, user }) => {
		if (!user) throw new Error();

		const chat = await prisma.chat.findUnique({
			where: PrismaUtils.nonNull(args.where)
		});

		if (!chat) return { record: null };

		const record = await prisma.chatsOnUsers
			.update({
				where: {
					chatId_userId: {
						chatId: chat.id,
						userId: user.id
					}
				},
				data: { lastOpenedAt: new Date() }
			})
			.chat()
			.catch((e) => {
				Logger.error(e.message);

				return null;
			});

		return { record };
	}
});
