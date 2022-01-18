import { arg, mutationField, nonNull } from "nexus";
import { NotFoundError, PrismaUtils } from "../../../utils";

export const leaveChat = mutationField("leaveChat", {
	type: nonNull("LeaveChatPayload"),
	args: {
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

		if (!chat) throw new NotFoundError("This chat could not be found.");

		const record = await prisma.chatsOnUsers
			.delete({
				where: {
					chatId_userId: {
						chatId: chat.id,
						userId: user.id
					}
				}
			})
			.chat();

		if (!record) throw new Error();

		return { record };
	}
});
