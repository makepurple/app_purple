import { dayjs } from "@makepurple/utils";
import { NotificationType } from "@prisma/client";
import { mutationField, nonNull } from "nexus";
import { Logger } from "../../../utils";

export const openMessages = mutationField("openMessages", {
	type: nonNull("OpenMessagesPayload"),
	authorize: (parent, args, { user }) => {
		return !!user;
	},
	resolve: async (parent, args, { prisma, user }) => {
		if (!user) throw new Error();

		/**
		 * !HACK
		 * @description Attempt to delete all notifications for this user that
		 * are over 1 month old. Ignore error if it occurs
		 * @author David Lee
		 * @date March 26, 2022
		 */
		await prisma.notification
			.deleteMany({
				where: {
					type: { equals: NotificationType.ChatMessageReceived },
					user: { id: { equals: user.id } },
					updatedAt: {
						lt: dayjs().subtract(1, "month").toDate()
					}
				}
			})
			.catch((e) => {
				Logger.error(e.message);

				return null;
			});

		const record = await prisma.user.update({
			where: { id: user.id },
			data: { messagesLastOpenedAt: new Date() }
		});

		return { record };
	}
});
