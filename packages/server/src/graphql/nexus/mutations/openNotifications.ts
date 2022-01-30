import { mutationField, nonNull } from "nexus";

export const openNotifications = mutationField("openNotifications", {
	type: nonNull("OpenNotificationsPayload"),
	authorize: (parent, args, { user }) => {
		return !!user;
	},
	resolve: async (parent, args, { prisma, user }) => {
		if (!user) throw new Error();

		const record = await prisma.user.update({
			where: {
				id: user.id
			},
			data: {
				notificationsLastOpenedAt: new Date()
			}
		});

		return { record };
	}
});
