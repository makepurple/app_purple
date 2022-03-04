import { UserActivityType } from "@prisma/client";
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

		const post = await prisma.post.findUnique({
			where: PrismaUtils.nonNull(args.where),
			include: {
				activities: {
					where: {
						type: UserActivityType.UpvotePost,
						user: { id: { equals: user.id } }
					}
				},
				skills: {
					select: {
						skillId: true
					}
				}
			}
		});

		if (!post) throw new Error("This post does not exist");

		const record = await prisma.post.update({
			where: PrismaUtils.nonNull(args.where),
			data: {
				...(post.activities.length
					? {
							activities: {
								create: {
									skills: {
										connect: post.skills.map((skill) => ({
											id: skill.skillId
										}))
									},
									type: UserActivityType.UpvotePost,
									user: { connect: { id: user.id } }
								}
							}
					  }
					: {}),
				upvoters: {
					connectOrCreate: {
						where: {
							userId_postId: {
								postId: post.id,
								userId: user.id
							}
						},
						create: { userId: user.id }
					}
				}
			}
		});

		return { record };
	}
});
