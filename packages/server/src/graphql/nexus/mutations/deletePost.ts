import { oneLine } from "common-tags";
import { arg, mutationField, nonNull } from "nexus";
import { Logger, PermissionUtils, PrismaUtils } from "../../../utils";

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

		if (!author) return false;
		if (user.id === author.id) return true;
		if (PermissionUtils.isGreaterRole(user.role, author.role)) return true;

		return false;
	},
	resolve: async (parent, args, { cloudinary, graphcdn, prisma, res, user }) => {
		if (!user) throw new Error();

		const images = await prisma.post
			.findUnique({
				where: PrismaUtils.nonNull(args.where)
			})
			.images();

		await Promise.all(
			images.map(async (image) => {
				return await cloudinary.deleteImageFile(image.id).catch((e) => {
					// Try our best to delete as much as possible, but proceed regardless
					Logger.error(`Could not delete cloudinary image: ${image.id}`, e.message);
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

		await graphcdn.purge`
			mutation($postId: ID!, $userId: ID!) {
				purgePost(id: $postId)
				purgeUser(id: $userId)
			}
		`({
			postId: record.id,
			userId: user.id
		});

		await res.unstable_revalidate(`/${user.name}`).catch(() => null);
		await res.unstable_revalidate(`/${user.name}/posts`).catch(() => null);
		await res.unstable_revalidate(`/${user.name}/${record.urlSlug}`).catch(() => null);

		return { record };
	}
});
