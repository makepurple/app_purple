import { PrismaUtils } from "@/server/utils";
import { oneLine } from "common-tags";
import { arg, intArg, list, nonNull, queryField } from "nexus";

export const posts = queryField("posts", {
	type: nonNull(list(nonNull("Post"))),
	description: oneLine`
		A list of user-created posts
	`,
	args: {
		cursor: arg({ type: "PostWhereUniqueInput" }),
		skip: intArg({ default: 0 }),
		take: intArg({ default: 50 }),
		where: nonNull(arg({ type: "PostWhereInput" }))
	},
	resolve: async (parent, args, { prisma }) => {
		return await prisma.post.findMany({
			cursor: {
				id: args.cursor?.id ?? undefined
			},
			skip: args.skip ?? 0,
			take: Math.min(args.take ?? 50, 50),
			where: {
				author: {
					name: PrismaUtils.nonNull(args.where.author?.name)
				},
				authorId: args.where.authorId ?? undefined
			}
		});
	}
});
