import { oneLine } from "common-tags";
import { arg, nonNull, queryField } from "nexus";

export const post = queryField("post", {
	type: "Post",
	description: oneLine`
		A user-created post.
	`,
	args: {
		where: nonNull(arg({ type: "PostWhereUniqueInput" }))
	},
	resolve: async (parent, args, { prisma }) => {
		return await prisma.post.findUnique({
			where: {
				id: args.where.id ?? undefined
			}
		});
	}
});
