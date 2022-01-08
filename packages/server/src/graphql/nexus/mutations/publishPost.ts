import { PostPublishInput } from "@makepurple/validators";
import { UserActivityType } from "@prisma/client";
import { arg, mutationField, nonNull } from "nexus";
import { PrismaUtils } from "../../../utils";

export const publishPost = mutationField("publishPost", {
	type: nonNull("PublishPostPayload"),
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
	resolve: async (parent, args, { prisma, user }) => {
		if (!user) throw new Error();

		const post = await prisma.post.findUnique({
			where: PrismaUtils.nonNull(args.where)
		});

		if (post?.publishedAt) return { record: post };

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

		const record = await prisma.post.update({
			data: {
				...dataInput,
				activities: {
					create: {
						type: UserActivityType.PublishPost,
						user: { connect: { id: user.id } }
					}
				},
				publishedAt: new Date(),
				readTime: args.data?.readTime ?? undefined,
				urlSlug
			},
			where: PrismaUtils.nonNull(args.where)
		});

		return { record };
	}
});
