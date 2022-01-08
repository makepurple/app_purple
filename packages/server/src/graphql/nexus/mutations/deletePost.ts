import { oneLine } from "common-tags";
import { arg, mutationField, nonNull } from "nexus";
import { Logger, PrismaUtils } from "../../../utils";

export const deletePost = mutationField("deletePost", {
	type: nonNull("DeletePostPayload"),
	description: oneLine`
		Users can delete their own posts.
	`,
	args: {
		where: nonNull(arg({ type: "PostWhereUniqueInput" }))
	},
	authorize: async (parent, args, { prisma, user }) => {
		if (!user) return false;

		const author = await prisma.post
			.findUnique({
				where: PrismaUtils.nonNull(args.where)
			})
			.author();

		if (user.id !== author?.id) return false;

		return true;
	},
	resolve: async (parent, args, { cloudinary, prisma }) => {
		const images = await prisma.post
			.findUnique({
				where: PrismaUtils.nonNull(args.where)
			})
			.images();

		await Promise.all(
			images.map(async (image) => {
				return await cloudinary.client.deleteImageFile(image.id).catch(() => {
					// Try our best to delete as much as possible, but proceed
					Logger.error(`Could not delete cloudinary image: ${image.id}`);
				});
			})
		);

		const record = await prisma.$transaction(async (transaction) => {
			const deleted = await transaction.post.delete({
				where: PrismaUtils.nonNull(args.where)
			});

			await transaction.userActivity.deleteMany({
				where: {
					post: { id: { equals: deleted.id } }
				}
			});

			return deleted;
		});

		return { record };
	}
});
