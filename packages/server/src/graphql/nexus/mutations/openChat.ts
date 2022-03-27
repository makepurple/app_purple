import { mutationField, nonNull } from "nexus";

export const openChat = mutationField("openChat", {
	type: nonNull("OpenChatPayload"),
	authorize: (parent, args, { user }) => {
		return !!user;
	},
	resolve: async (parent, args, { prisma, user }) => {
		if (!user) throw new Error();

		const record = await prisma.chatsOnUsers
			.update({
				where: { id: user.id },
				data: { lastOpenedAt: new Date() }
			})
			.chat();

		return { record };
	}
});
