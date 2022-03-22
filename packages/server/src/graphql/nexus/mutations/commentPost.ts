import { CommentCreateInput } from "@makepurple/validators";
import { NotificationType, UserActivityType } from "@prisma/client";
import { arg, mutationField, nonNull } from "nexus";
import { PrismaUtils } from "../../..";
import { NotFoundError } from "../../../utils";

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

		const post = await prisma.post.findUnique({
			where: PrismaUtils.nonNull(args.data.post),
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

		if (!post) throw new NotFoundError("This post could not be found");

		const didPreviouslyComment = !!post.comments.length;

		const record = await prisma.$transaction(async (transaction) => {
			const comment = await transaction.comment.create({
				data: {
					content: dataInput.content,
					parent: PrismaUtils.nonEmpty({
						connect: PrismaUtils.nonEmpty(PrismaUtils.nonNull(args.data.parent))
					}),
					post: {
						connect: PrismaUtils.nonNull(args.data.post)
					},
					author: { connect: { id: user.id } }
				}
			});

			await transaction.post.update({
				where: { id: post.id },
				data: {
					// Only create a user-activity if the user hasn't previously commented on the
					// post
					activities: didPreviouslyComment
						? undefined
						: {
								create: {
									comment: {
										connect: {
											id: comment.id
										}
									},
									type: UserActivityType.CommentPost,
									user: { connect: { id: user.id } }
								}
						  },
					// Only create a notification if the author doesn't already have one for this
					// post, and the comment did not come from the author
					notifications:
						post.authorName === user.name
							? undefined
							: post.notifications.length
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
