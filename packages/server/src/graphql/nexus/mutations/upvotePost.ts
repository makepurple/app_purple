import { arg, mutationField, nonNull } from "nexus";

export const upvotePost = mutationField("upvotePost", {
	type: nonNull("Post"),
	args: {
		where: nonNull(arg({ type: "PostWhereUniqueInput" }))
	},
	authorize: (parent, args, { user }) => !!user,
	resolve: async (parent, args, { prisma, user }) => {
		/* eslint-disable @typescript-eslint/no-non-null-assertion */
		const post = await prisma.post.update({
			where: {
				id: args.where.id ?? undefined
			},
			data: {
				upvotes: {
					connectOrCreate: {
						where: {
							userId_postId: {
								postId: args.where.id!,
								userId: user!.id
							}
						},
						create: {
							userId: user!.id
						}
					}
				}
			}
		});
		/* eslint-enable @typescript-eslint/no-non-null-assertion */

		if (!post) throw new Error("Post could not be found");

		return post;
	}
});
