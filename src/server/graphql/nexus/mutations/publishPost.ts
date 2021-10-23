import { arg, mutationField, nonNull } from "nexus";

export const publishPost = mutationField("publishPost", {
	type: nonNull("Post"),
	args: {
		where: nonNull(arg({ type: "PostWhereUniqueInput" }))
	},
	authorize: async (parent, args, { prisma, user }) => {
		if (!user) return false;

		const post = await prisma.post.findUnique({
			where: {
				id: args.where.id ?? undefined
			}
		});

		if (post?.authorId !== user.id) return false;

		return true;
	},
	resolve: async (parent, args, { prisma }) => {
		const post = await prisma.post.findUnique({
			where: {
				id: args.where.id ?? undefined
			}
		});

		if (!post?.title) {
			throw new Error("Posts must have a title to be published!");
		}

		const urlSlug: string = post.title
			.split(/\s+/g)
			.map((word) => word.toLowerCase())
			.join("-");

		return await prisma.post.update({
			where: {
				id: args.where.id ?? undefined
			},
			data: {
				publishedAt: new Date(),
				urlSlug: encodeURIComponent(urlSlug)
			}
		});
	}
});
