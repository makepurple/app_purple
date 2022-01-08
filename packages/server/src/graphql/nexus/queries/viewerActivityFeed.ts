import { findManyCursorConnection } from "@devoxa/prisma-relay-cursor-connection";
import { UserActivityType } from "@prisma/client";
import { arg, intArg, nonNull, queryField, stringArg } from "nexus";
import { PrismaUtils } from "../../../utils";

export const viewerActivityFeed = queryField("viewerActivityFeed", {
	type: nonNull("UserActivityItemConnection"),
	args: {
		after: stringArg(),
		before: stringArg(),
		first: intArg(),
		last: intArg(),
		where: arg({ type: "UserActivityWhereInput" })
	},
	authorize: (parent, args, { user }) => {
		return !!user;
	},
	resolve: async (parent, args, { prisma, user }) => {
		if (!user) throw new Error();

		const connection = findManyCursorConnection<any, { id: string }>(
			(paginationArgs) =>
				prisma.userActivity
					.findMany({
						...paginationArgs,
						where: {
							...PrismaUtils.nonNull(args.where),
							OR: [
								{
									type: UserActivityType.CommentPost,
									comment: { isNot: null }
								},
								{
									type: UserActivityType.FollowUser,
									follow: { isNot: null }
								},
								{
									type: UserActivityType.FriendAcceptUser,
									follow: { isNot: null }
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
							],
							user: {
								followedBy: {
									some: {
										follower: { id: { equals: user.id } }
									}
								}
							}
						},
						include: {
							comment: true,
							follow: true,
							friendship: true,
							post: true,
							user: true
						}
					})
					.then((items) => {
						return items.map((item) => ({
							__typename: `UserActivityItem${item.type}`,
							...item
						}));
					}),
			() =>
				prisma.userActivity.count({
					where: {
						...PrismaUtils.nonNull(args.where),
						user: {
							followedBy: {
								some: {
									follower: { id: { equals: user.id } }
								}
							}
						}
					}
				}),
			{ ...PrismaUtils.handleRelayConnectionArgs(args) },
			{ ...PrismaUtils.handleRelayCursor() }
		);

		return connection;
	}
});
