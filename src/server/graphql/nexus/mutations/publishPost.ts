import { PrismaUtils } from "@/server/utils";
import { PostPublishInput } from "@/validators";
import { arg, mutationField, nonNull } from "nexus";

export const publishPost = mutationField("publishPost", {
	type: nonNull("Post"),
	args: {
		data: arg({ type: "PostPublishInput" }),
		where: nonNull(arg({ type: "PostWhereUniqueInput" }))
	},
	authorize: async (parent, args, { prisma, user }) => {
		if (!user) return false;

		const author = await prisma.post
			.findUnique({ where: PrismaUtils.nonNull(args.where) })
			.author();

		if (user.id !== author?.id) return false;

		return true;
	},
	resolve: async (parent, args, { prisma }) => {
		const where = PrismaUtils.nonNull(args.where);

		const post = await prisma.post.findUnique({ where });

		const dataInput = PostPublishInput.validator({
			content: args.data?.content ?? undefined,
			description: args.data?.description ?? undefined,
			thumbnailUrl: args.data?.thumbnailUrl ?? undefined,
			title: args.data?.title ?? post?.title ?? undefined
		});

		const postTitle = dataInput.title;

		if (!postTitle) {
			throw new Error("Posts must have a title to be published!");
		}

		const urlSlug: string = postTitle
			.replace(/[^a-z0-9]/gim, "")
			.split(/\s+/g)
			.map((word) => word.toLowerCase())
			.join("-")
			.trim();

		return await prisma.post.update({
			data: {
				publishedAt: new Date(),
				urlSlug
			},
			where
		});
	}
});
