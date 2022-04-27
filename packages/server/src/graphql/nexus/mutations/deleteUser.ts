import { arg, mutationField, nonNull } from "nexus";
import { Logger, PermissionUtils, PrismaUtils } from "../../../utils";

export const deleteUser = mutationField("deleteUser", {
	type: nonNull("DeleteUserPayload"),
	args: {
		where: nonNull(arg({ type: "UserWhereUniqueInput" }))
	},
	authorize: async (parent, args, { prisma, user }) => {
		if (!user) return false;

		const viewer = await prisma.user.findUnique({
			where: { id: user.id },
			rejectOnNotFound: true
		});

		const toDelete = await prisma.user.findUnique({
			where: PrismaUtils.nonNull(args.where),
			rejectOnNotFound: true
		});

		if (toDelete.id === user.id) return true;
		if (PermissionUtils.getRoleLevel(viewer) > PermissionUtils.getRoleLevel(toDelete)) {
			return true;
		}

		return false;
	},
	resolve: async (parent, args, { cloudinary, prisma, user }) => {
		if (!user) throw new Error();

		const imageIds = await prisma.user
			.findUnique({
				where: { id: user.id }
			})
			.posts({
				select: { images: { select: { id: true } } }
			})
			.then((posts) =>
				posts.reduce(
					(all, post) => [...all, ...post.images.map((image) => image.id)],
					[] as readonly string[]
				)
			);

		const chatIds = await prisma.user
			.findUnique({
				where: { id: user.id }
			})
			.chats({ select: { chatId: true } })
			.then((chats) => chats.map((chat) => chat.chatId));

		await Promise.all(
			imageIds.map(async (imageId) => {
				return await cloudinary.deleteImageFile(imageId).catch((e) => {
					// Try our best to delete as much as possible, but proceed regardless
					Logger.error(`Could not delete cloudinary image: ${imageId}`, e.message);
				});
			})
		).catch(() => null);

		const record = await prisma.$transaction(async (transaction) => {
			// Delete all chats where the user was the last member
			await transaction.chat.deleteMany({
				where: {
					id: { in: chatIds },
					users: { none: {} }
				}
			});

			return await prisma.user.delete({
				where: { id: user.id }
			});
		});

		return { record };
	}
});
