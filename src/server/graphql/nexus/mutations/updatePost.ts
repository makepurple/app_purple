import { PrismaUtils } from "@/server/utils";
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
		const updatedPost = await prisma.post.update({
			data: args.data,
			where: PrismaUtils.nonNull(args.where)
		});

		return updatedPost;
	}
});
