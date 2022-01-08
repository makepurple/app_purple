import { CommentCreateInput } from "@makepurple/validators";
import { UserActivityType } from "@prisma/client";
import { arg, mutationField, nonNull } from "nexus";
import { PrismaUtils } from "../../..";

export const createComment = mutationField("createComment", {
	type: nonNull("CreateCommentPayload"),
	args: {
		data: nonNull(arg({ type: "CommentCreateInput" }))
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

			if (args.data.post) {
				const postComments = await transaction.post
					.findUnique({
						where: PrismaUtils.nonNull(args.data.post)
					})
					.comments({
						where: {
							author: { id: { equals: user.id } }
						}
					});

				if (postComments.length) return comment;

				await transaction.comment.update({
					where: PrismaUtils.nonNull(args.data.post),
					data: {
						activities: {
							create: {
								type: UserActivityType.CommentPost,
								user: { connect: { id: user.id } }
							}
						}
					}
				});
			}

			return comment;
		});

		return { record };
	}
});
