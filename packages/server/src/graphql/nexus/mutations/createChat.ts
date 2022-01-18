import { arg, mutationField, nonNull } from "nexus";
import { PrismaUtils } from "../../../utils";

export const createChat = mutationField("createChat", {
	type: nonNull("CreateChatPayload"),
	args: {
		data: nonNull(arg({ type: "CreateChatInput" }))
	},
	authorize: (parent, args, { user }) => {
		return !!user;
	},
	resolve: async (parent, args, { prisma, user }) => {
		if (!user) throw new Error();

		/**
		 * @description Get only users that are friended with the user
		 * @author David Lee
		 * @date January 17, 2022
		 */
		const invitees = await prisma.user.findMany({
			where: {
				...PrismaUtils.nonNull(args.data.users),
				friending: { some: { friender: { id: { equals: user.id } } } }
			}
		});

		const inviteeIds = invitees.map((invitee) => invitee.id);

		const existing = await prisma.chat.findFirst({
			where: {
				users: {
					every: {
						id: { in: [user.id, ...inviteeIds] }
					},
					none: {
						id: { notIn: [user.id, ...inviteeIds] }
					}
				}
			}
		});

		if (existing) return { record: existing };

		const record = await prisma.chat.create({
			data: {
				users: {
					create: [
						{
							user: { connect: { id: user.id } }
						},
						...inviteeIds.map((inviteeId) => ({
							user: { connect: { id: inviteeId } }
						}))
					]
				}
			}
		});

		return { record };
	}
});
