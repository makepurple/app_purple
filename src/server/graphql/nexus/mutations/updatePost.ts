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
		const nonNullData = PrismaUtils.nonNull(args.data);

		const dataInput = PostUpdateInput.validator(nonNullData);

		const updatedPost = await prisma.post.update({
			data: dataInput,
			where: PrismaUtils.nonNull(args.where)
		});

		return updatedPost;
	}
});
