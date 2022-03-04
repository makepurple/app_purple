import { UserActivityType } from "@prisma/client";
import { arg, mutationField, nonNull } from "nexus";
import { NotFoundError, PrismaUtils } from "../../../utils";

export const unvotePost = mutationField("unvotePost", {
	type: nonNull("UnvotePostPayload"),
	args: {
		where: nonNull(arg({ type: "PostWhereUniqueInput" }))
	},
	authorize: (parent, args, { user }) => {
		return !!user;
	},
	resolve: async (parent, args, { prisma, user }) => {
		if (!user) throw new Error();

		const post = await prisma.post.findUnique({
			where: PrismaUtils.nonNull(args.where),
			include: {
				activities: {
					where: {
						type: UserActivityType.UpvotePost,
						user: { id: user.id }
					}
				}
			}
		});

		if (!post) throw new NotFoundError("Post could not be found");

		const record = await prisma.$transaction(async (transaction) => {
			await transaction.userActivity.deleteMany({
				where: {
					id: {
						in: post.activities.map((activity) => activity.id)
					}
				}
			});

			return await transaction.postUpvoter.delete({
				where: {
					userId_postId: {
						userId: user.id,
						postId: post.id
					}
				}
			});
		});

		return { record };
	}
});
