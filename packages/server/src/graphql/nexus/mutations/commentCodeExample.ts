import { CommentCreateInput } from "@makepurple/validators";
import { NotificationType, UserActivityType } from "@prisma/client";
import { arg, mutationField, nonNull } from "nexus";
import { PrismaUtils } from "../../../utils";

export const commentCodeExample = mutationField("commentCodeExample", {
	type: nonNull("CommentCodeExamplePayload"),
	args: {
		data: nonNull(arg({ type: "CommentCodeExampleInput" }))
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
					codeExample: {
						connect: PrismaUtils.nonNull(args.data.codeExample)
					},
					content: dataInput.content,
					parent: {
						connect: PrismaUtils.nonNull(args.data.parent)
					},
					author: { connect: { id: user.id } }
				}
			});

			const codeExample = await transaction.comment
				.findUnique({
					where: { id: comment.id }
				})
				.codeExample({
					include: {
						comments: {
							where: { author: { id: { equals: user.id } } }
						},
						notifications: {
							where: {
								type: NotificationType.CodeExampleCommented
							}
						}
					}
				});

			if (!codeExample) return comment;

			await transaction.codeExample.update({
				where: { id: codeExample.id },
				data: {
					// Only create a user-activity if the user hasn't previously commented on the
					// code-example
					activities: codeExample.comments.length
						? {}
						: {
								create: {
									type: UserActivityType.CommentCodeExample,
									user: { connect: { id: user.id } }
								}
						  },
					// Only create a notification if the author doesn't already have one for this
					// post
					notifications:
						codeExample.notifications.length && codeExample.authorName !== user.name
							? {
									update: {
										where: { id: codeExample.notifications[0].id },
										data: {
											updatedAt: new Date()
										}
									}
							  }
							: {
									create: {
										type: NotificationType.CodeExampleCommented,
										user: { connect: { name: codeExample.authorName } }
									}
							  }
				}
			});

			return comment;
		});

		return { record };
	}
});
