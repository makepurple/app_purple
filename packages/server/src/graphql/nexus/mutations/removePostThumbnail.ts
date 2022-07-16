import { Post } from "@prisma/client";
import { arg, mutationField, nonNull } from "nexus";
import { PrismaUtils } from "../../../utils";

export const removePostThumbnail = mutationField("removePostThumbnail", {
	type: nonNull("RemovePostThumbnailPayload"),
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
		let record: Post | null = await prisma.post.findUniqueOrThrow({
			where: PrismaUtils.nonNull(args.where)
		});

		const thumbnailUrl = record?.thumbnailUrl;

		if (!thumbnailUrl) return { record };

		const thumbnailImage = await prisma.postImage.findUnique({
			where: {
				url: thumbnailUrl
			}
		});

		if (!thumbnailImage) {
			record = await prisma.post.update({
				where: PrismaUtils.nonNull(args.where),
				data: {
					thumbnailUrl: null
				}
			});

			return { record };
		}

		await cloudinary.deleteImageFile(thumbnailImage.id);

		record = await prisma.$transaction(async (transaction) => {
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

		return { record };
	}
});
