import { PrismaUtils } from "@/server/utils";
import { PostUpdateInput } from "@/validators";
import { arg, mutationField, nonNull } from "nexus";

export const updatePost = mutationField("updatePost", {
	type: "Post",
	args: {
		data: nonNull(arg({ type: "PostUpdateInput" })),
		where: nonNull(arg({ type: "PostWhereUniqueInput" }))
	},
	authorize: (parent, args, { user }) => {
		return !!user;
	},
	resolve: async (parent, args, { prisma }) => {
		const dataInput = PostUpdateInput.validator({
			content: args.data.content ?? undefined,
			description: args.data.description ?? undefined,
			thumbnailUrl: args.data.thumbnailUrl,
			title: args.data.title ?? undefined
		});

		const where = PrismaUtils.nonNull(args.where);

		const post = await prisma.post.findUnique({ where });
		const postTitle = dataInput.title ?? post?.title ?? "";
		const urlSlug: string = postTitle
			.replace(/[^a-z0-9]/gim, "")
			.split(/\s+/g)
			.map((word) => word.toLowerCase())
			.join("-")
			.trim();

		const updatedPost = await prisma.post.update({
			data: { ...dataInput, urlSlug },
			where: PrismaUtils.nonNull(args.where)
		});

		return updatedPost;
	}
});
