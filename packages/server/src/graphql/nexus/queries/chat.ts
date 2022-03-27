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
					user: { id: { equals: user.id } }
				}
			});

		return !!users.length;
	},
	resolve: async (parent, args, { prisma, user }) => {
		if (!user) throw new Error();

		return await prisma.chat.findUnique({
			where: PrismaUtils.nonNull(args.where)
		});
	}
});
