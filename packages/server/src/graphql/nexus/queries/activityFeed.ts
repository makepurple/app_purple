import { Prisma, UserActivityType } from "@prisma/client";
import { arg, intArg, nonNull, queryField, stringArg } from "nexus";
import { PrismaUtils } from "../../../utils";

export const activityFeed = queryField("activityFeed", {
	type: nonNull("UserActivityConnection"),
	args: {
		after: stringArg(),
		before: stringArg(),
		first: intArg(),
		last: intArg(),
		where: arg({ type: "UserActivityWhereInput" })
	},
	resolve: async (parent, args, { prisma, user }) => {
		const where: Prisma.UserActivityWhereInput = user
			? {
					OR: [
						// Get only "high-value" activities for skill follows
						{
							AND: [
								{
									OR: [
										{
											type: UserActivityType.CreateCodeExample,
											codeExample: {}
										},
										{
											type: UserActivityType.FollowSkill,
											follow: {}
										},
										{
											type: UserActivityType.FollowUser,
											follow: {}
										},
										{
											type: UserActivityType.PublishPost,
											post: {}
										}
									]
								},
								{
									skills: {
										some: {
											followedBy: {
												some: {
													follower: {
														id: {
															equals: user.id
														}
													}
												}
											}
										}
									}
								}
							]
						},
						// Get all activitiese for user follows
						{
							AND: [
								{
									OR: [
										{
											type: UserActivityType.CommentCodeExample,
											comment: {}
										},
										{
											type: UserActivityType.CommentPost,
											comment: {}
										},
										{
											type: UserActivityType.CreateCodeExample,
											codeExample: {}
										},
										{
											type: UserActivityType.FollowSkill,
											follow: {}
										},
										{
											type: UserActivityType.FollowUser,
											follow: {}
										},
										{
											type: UserActivityType.FriendAcceptUser,
											follow: {}
										},
										{
											type: UserActivityType.Joined
										},
										{
											type: UserActivityType.PublishPost,
											post: {}
										},
										{
											type: UserActivityType.UpvoteCodeExample,
											codeExample: {}
										},
										{
											type: UserActivityType.UpvotePost,
											post: {}
										}
									]
								},
								{
									user: {
										followedBy: {
											some: {
												follower: {
													id: { equals: user.id }
												}
											}
										}
									}
								}
							]
						}
					],
					user: {
						id: { not: { equals: user.id } }
					}
			  }
			: {
					// Get only "high-value" activitiese for un-authed users
					OR: [
						{
							type: UserActivityType.CreateCodeExample,
							codeExample: {}
						},
						{
							type: UserActivityType.FollowSkill,
							follow: {}
						},
						{
							type: UserActivityType.FollowUser,
							follow: {}
						},
						{
							type: UserActivityType.PublishPost,
							post: {}
						}
					]
			  };

		const connection = await PrismaUtils.findManyCursorConnection<any, { id: string }>(
			(paginationArgs) =>
				prisma.userActivity
					.findMany({
						...paginationArgs,
						orderBy: {
							updatedAt: "desc"
						},
						where: {
							...PrismaUtils.nonNull(args.where),
							...where
						}
					})
					.then((items) => {
						return items.map((item) => ({
							__typename: `UserActivity${item.type}`,
							...item
						}));
					}),
			() =>
				prisma.userActivity.count({
					where: {
						...PrismaUtils.nonNull(args.where),
						...where
					}
				}),
			{ ...PrismaUtils.handleRelayConnectionArgs(args) },
			{ ...PrismaUtils.handleRelayCursor() }
		);

		return connection;
	}
});
