import { arg, nonNull, queryField } from "nexus";
import { PrismaUtils } from "../../../utils";

export const chat = queryField("chat", {
	type: "Chat",
	args: {
		where: nonNull(arg({ type: "ChatWhereUniqueInput" }))
	},
	authorize: async (parent, args, { prisma, user }) => {
		if (!user) return false;

		const users = await prisma.chat
			.findUnique({
				where: PrismaUtils.nonNull(args.where)
			})
			.users({
				where: {
					id: { equals: user.id }
				}
			});

		if (!users.length) return false;

		return true;
	},
	resolve: async (parent, args, { prisma, user }) => {
		if (!user) throw new Error();

		const chats = await prisma.user
			.findUnique({
				where: { id: user.id }
			})
			.chats({
				where: PrismaUtils.nonNull(args.where),
				include: { chat: true }
			});

		return chats[0]?.chat;
	}
});
