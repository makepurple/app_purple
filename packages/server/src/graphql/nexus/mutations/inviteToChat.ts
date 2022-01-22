import { arg, mutationField, nonNull } from "nexus";
import { PrismaUtils } from "../../../utils";

export const inviteToChat = mutationField("inviteToChat", {
	type: nonNull("InviteToChatPayload"),
	args: {
		data: nonNull(arg({ type: "InviteToChatInput" })),
		where: nonNull(arg({ type: "ChatWhereUniqueInput" }))
	},
	authorize: (parent, args, { user }) => {
		return !!user;
	},
	resolve: async (parent, args, { prisma, user }) => {
		if (!user) throw new Error();

		const invitees = await prisma.user.findMany({
			where: PrismaUtils.nonNull(args.data.users)
		});

		const record = await prisma.chat.update({
			where: PrismaUtils.nonNull(args.where),
			data: {
				users: {
					createMany: {
						data: invitees.map((invitee) => ({
							userId: invitee.id
						})),
						skipDuplicates: true
					}
				}
			}
		});

		return { record };
	}
});
