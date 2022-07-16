import { arg, mutationField, nonNull } from "nexus";
import { PrismaUtils } from "../../../utils";

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

		const chat = await prisma.chat.findUniqueOrThrow({
			where: PrismaUtils.nonNull(args.where)
		});

		const record = await prisma.$transaction(async (transaction) => {
			await transaction.chatsOnUsers.delete({
				where: {
					chatId_userId: {
						chatId: chat.id,
						userId: user.id
					}
				}
			});

			const result = await prisma.chat.findUniqueOrThrow({
				where: { id: chat.id },
				include: {
					_count: {
						select: {
							users: true
						}
					}
				}
			});

			if (!result) return null;

			const hasUsers = !!result._count.users;

			// Delete the chat if there are no more users in it
			if (!hasUsers) {
				await transaction.chat.delete({
					where: { id: result.id }
				});
			}

			return result;
		});

		return { record };
	}
});
