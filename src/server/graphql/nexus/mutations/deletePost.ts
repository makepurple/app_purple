import { Logger } from "@/server/utils";
import { oneLine } from "common-tags";
import { arg, mutationField, nonNull } from "nexus";

export const deletePost = mutationField("deletePost", {
	type: nonNull("Post"),
	description: oneLine`
		User can delete their own post.
	`,
	args: {
		where: nonNull(arg({ type: "PostWhereUniqueInput" }))
	},
	authorize: async (parent, args, { prisma, user }) => {
		if (!user) return false;

		const postToDelete = await prisma.post.findUnique({
			where: {
				id: args.where.id ?? undefined
			},
			select: {
				author: {
					select: {
						id: true
					}
				}
			}
		});

		if (user.id !== postToDelete?.author.id) return false;

		return true;
	},
	resolve: async (parent, args, { cloudinary, prisma }) => {
		const postToDelete = await prisma.post.findUnique({
			where: {
				id: args.where.id ?? undefined
			},
			select: {
				images: {
					select: {
						id: true
					}
				}
			}
		});

		if (!postToDelete) {
			throw new Error("Post was not found");
		}

		await Promise.all(
			postToDelete.images.map((image) => {
				return cloudinary.client.deleteImageFile(image.id).catch(() => {
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
