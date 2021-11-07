import { PrismaUtils } from "@/server/utils";
import { PostTitle } from "@/validators";
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
			},
			select: {
				author: {
					select: {
						id: true
					}
				}
			}
		});

		if (post?.author.id !== user.id) return false;

		return true;
	},
	resolve: async (parent, args, { prisma }) => {
		const where = PrismaUtils.nonNull(args.where);

		const post = await prisma.post.findUnique({ where });

		if (!post?.title) {
			throw new Error("Posts must have a title to be published!");
		}

		const postTitle = PostTitle.validator(post.title);

		const urlSlug: string = postTitle
			.replace(/[^a-z0-9]/gim, "")
			.split(/\s+/g)
			.map((word) => word.toLowerCase())
			.join("-")
			.trim();

		return await prisma.post.update({
			where: {
				id: args.where.id ?? undefined
			},
			data: {
				publishedAt: new Date(),
				urlSlug
			}
		});
	}
});
