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
		const invitees = await prisma.user
			.findUnique({ where: { id: user.id } })
			.friending({
				where: {
					friender: { id: { equals: user.id } },
					friending: {
						...PrismaUtils.nonNull(args.data.users),
						friending: {
							some: {
								friending: { id: { equals: user.id } }
							}
						}
					},
					rejectedAt: { equals: null }
				},
				include: { friending: true }
			})
			.then((items) => items.map((item) => item.friending));

		const inviteeIds = invitees.map((invitee) => invitee.id);

		const record = await prisma.$transaction(async (transaction) => {
			const chat =
				(await transaction.chat.findFirst({
					where: {
						users: {
							every: { id: { in: [user.id, ...inviteeIds] } },
							none: { id: { notIn: [user.id, ...inviteeIds] } }
						}
					}
				})) ??
				(await transaction.chat.create({
					data: {
						users: {
							createMany: {
								data: [user.id, ...inviteeIds].map((userId) => ({ userId }))
							}
						}
					}
				}));

			return await transaction.chat.update({
				where: {
					id: chat.id
				},
				data: {
					messages: {
						create: {
							content: args.data.message,
							sender: { connect: { id: user.id } }
						}
					}
				}
			});
		});

		return { record };
	}
});
