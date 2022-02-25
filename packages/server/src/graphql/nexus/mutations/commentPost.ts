import { CommentCreateInput } from "@makepurple/validators";
import { NotificationType, UserActivityType } from "@prisma/client";
import { arg, mutationField, nonNull } from "nexus";
import { PrismaUtils } from "../../..";

export const commentPost = mutationField("commentPost", {
	type: nonNull("CommentPostPayload"),
	args: {
		data: nonNull(arg({ type: "CommentPostInput" }))
	},
	authorize: (parent, args, { user }) => {
		return !!user;
	},
	resolve: async (parent, args, { prisma, user }) => {
		if (!user) throw new Error();

		const dataInput = CommentCreateInput.validator({
			content: args.data.content ?? undefined
		});

		const record = await prisma.$transaction(async (transaction) => {
			const comment = await transaction.comment.create({
				data: {
					content: dataInput.content,
					parent: {
						connect: PrismaUtils.nonNull(args.data.parent)
					},
					post: {
						connect: PrismaUtils.nonNull(args.data.post)
					},
					author: { connect: { id: user.id } }
				}
			});

			const post = await transaction.comment
				.findUnique({
					where: { id: comment.id }
				})
				.post({
					include: {
						comments: {
							where: { author: { id: { equals: user.id } } }
						},
						notifications: {
							where: {
								type: NotificationType.PostCommented
							}
						}
					}
				});

			if (!post) return comment;

			await transaction.post.update({
				where: { id: post.id },
				data: {
					// Only create a user-activity if the user hasn't previously commented on the
					// post
					activities: post.comments.length
						? {}
						: {
								create: {
									type: UserActivityType.CommentPost,
									user: { connect: { id: user.id } }
								}
						  },
					// Only create a notification if the author doesn't already have one for this
					// post
					notifications: post.notifications.length
						? {
								update: {
									where: { id: post.notifications[0].id },
									data: {
										updatedAt: new Date()
									}
								}
						  }
						: {
								create: {
									type: NotificationType.PostCommented,
									user: { connect: { name: post.authorName } }
								}
						  }
				}
			});

			return comment;
		});

		return { record };
	}
});
