import { PrismaUtils } from "@/server/utils";
import { arg, mutationField, nonNull } from "nexus";

export const removePostThumbnail = mutationField("removePostThumbnail", {
	type: "Post",
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
		const post = await prisma.post.findUnique({
			where: PrismaUtils.nonNull(args.where)
		});

		const thumbnailUrl = post?.thumbnailUrl;

		if (!thumbnailUrl) return post;

		const thumbnailImage = await prisma.postImage.findUnique({
			where: {
				url: thumbnailUrl
			}
		});

		if (!thumbnailImage) {
			return await prisma.post.update({
				where: PrismaUtils.nonNull(args.where),
				data: {
					thumbnailUrl: null
				}
			});
		}

		await cloudinary.client.deleteImageFile(thumbnailImage.id);

		return await prisma.$transaction(async (transaction) => {
			await transaction.postImage.delete({
				where: {
					url: thumbnailUrl
				}
			});

			return await transaction.post.update({
				where: PrismaUtils.nonNull(args.where),
				data: {
					thumbnailUrl: null
				}
			});
		});
	}
});
