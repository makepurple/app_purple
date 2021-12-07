import { Logger, PrismaUtils } from "@/server/utils";
import { oneLine } from "common-tags";
import { arg, mutationField, nonNull } from "nexus";

export const deletePost = mutationField("deletePost", {
	type: nonNull("Post"),
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

		return await prisma.post.delete({
			where: {
				id: args.where.id ?? undefined
			}
		});
	}
});
