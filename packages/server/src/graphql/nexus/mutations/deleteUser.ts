import { mutationField, nonNull } from "nexus";
import { Logger } from "../../../utils";

export const deleteUser = mutationField("deleteUser", {
	type: nonNull("DeleteUserPayload"),
	authorize: (parent, args, { user }) => {
		return !!user;
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

		await Promise.all(
			imageIds.map(async (imageId) => {
				return await cloudinary.deleteImageFile(imageId).catch((e) => {
					// Try our best to delete as much as possible, but proceed regardless
					Logger.error(`Could not delete cloudinary image: ${imageId}`, e.message);
				});
			})
		).catch(() => null);

		const record = await prisma.user.delete({
			where: { id: user.id }
		});

		return { record };
	}
});
