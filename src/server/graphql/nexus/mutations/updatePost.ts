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
			thumbnailUrl: args.data.thumbnailUrl
		});

		const updatedPost = await prisma.post.update({
			data: dataInput,
			where: PrismaUtils.nonNull(args.where)
		});

		return updatedPost;
	}
});
