import { postTitle } from "@/superstructs";
import { Prisma } from "@prisma/client";
import { arg, mutationField, nonNull } from "nexus";
import { assert } from "superstruct";

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

		assert(post.title, postTitle);

		const urlSlug: string = post.title
			.split(/\s+/g)
			.map((word) => word.toLowerCase())
			.join("-")
			.trim();

		return await prisma.post.update({
			where: {
				id: args.where.id ?? undefined
			},
			data: {
				content: post.content as Prisma.JsonArray,
				description: (post.description ?? "").trim(),
				publishedAt: new Date(),
				title: post.title.trim(),
				thumbnailUrl: post.thumbnailUrl,
				urlSlug: encodeURIComponent(urlSlug)
			}
		});
	}
});
