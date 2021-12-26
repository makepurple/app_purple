import { arg, mutationField, nonNull } from "nexus";

export const upvotePost = mutationField("upvotePost", {
	type: nonNull("UpvotePostPayload"),
	args: {
		where: nonNull(arg({ type: "PostWhereUniqueInput" }))
	},
	authorize: (parent, args, { user }) => !!user,
	resolve: async (parent, args, { prisma, user }) => {
		if (!user) throw new Error();

		const record = await prisma.post.update({
			where: {
				id: args.where.id ?? undefined
			},
			data: {
				upvotes: {
					connectOrCreate: {
						where: {
							userId_postId: {
								// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
								postId: args.where.id!,
								userId: user.id
							}
						},
						create: {
							userId: user.id
						}
					}
				}
			}
		});

		return { record };
	}
});
