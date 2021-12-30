import { arg, mutationField, nonNull } from "nexus";
import { PrismaUtils } from "../../../utils";

export const upvotePost = mutationField("upvotePost", {
	type: nonNull("UpvotePostPayload"),
	args: {
		where: nonNull(arg({ type: "PostWhereUniqueInput" }))
	},
	authorize: (parent, args, { user }) => {
		return !!user;
	},
	resolve: async (parent, args, { prisma, user }) => {
		if (!user) throw new Error();

		const record = await prisma.post.update({
			where: PrismaUtils.nonNull(args.where),
			data: {
				upvoters: {
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
