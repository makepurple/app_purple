import { findManyCursorConnection } from "@devoxa/prisma-relay-cursor-connection";
import { UserActivityType } from "@prisma/client";
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
		const connection = await findManyCursorConnection<any, { id: string }>(
			(paginationArgs) =>
				prisma.userActivity
					.findMany({
						...paginationArgs,
						orderBy: {
							updatedAt: "desc"
						},
						where: {
							...PrismaUtils.nonNull(args.where),
							AND: [
								{
									OR: [
										{
											type: UserActivityType.CommentPost,
											comment: { isNot: null }
										},
										{
											type: UserActivityType.FollowSkill,
											follow: { isNot: null as any }
										},
										{
											type: UserActivityType.FollowUser,
											follow: { isNot: null as any }
										},
										{
											type: UserActivityType.FriendAcceptUser,
											follow: { isNot: null as any }
										},
										{
											type: UserActivityType.Joined
										},
										{
											type: UserActivityType.PublishPost,
											post: { isNot: null as any }
										},
										{
											type: UserActivityType.UpvotePost,
											post: { isNot: null as any }
										}
									]
								},
								...(user
									? [
											{
												OR: [
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
									  ]
									: [])
							]
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
						...(user
							? {
									user: {
										followedBy: {
											some: {
												follower: { id: { equals: user.id } }
											}
										}
									}
							  }
							: {})
					}
				}),
			{ ...PrismaUtils.handleRelayConnectionArgs(args) },
			{ ...PrismaUtils.handleRelayCursor() }
		);

		return connection;
	}
});
