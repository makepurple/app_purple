import { FollowType, NotificationType, UserActivityType } from "@prisma/client";
import { arg, mutationField, nonNull } from "nexus";
import { octokit } from "../../../services";
import { PrismaUtils } from "../../../utils";

interface FollowOnGitHubParams {
	from?: string;
	to: string;
}

export const acceptFriendship = mutationField("acceptFriendship", {
	type: nonNull("AcceptFriendshipPayload"),
	args: {
		where: nonNull(arg({ type: "UserWhereUniqueInput" }))
	},
	authorize: (parent, args, { user }) => {
		if (!user) return false;

		return true;
	},
	resolve: async (parent, args, { octokit: graphql, prisma, user }) => {
		if (!user) throw new Error();

		const friender = await prisma.user.findUniqueOrThrow({
			where: PrismaUtils.nonNull(args.where)
		});

		const pendingFriendship = await prisma.friendship.findUniqueOrThrow({
			where: {
				frienderId_friendingId: {
					// The requester of the friendship
					frienderId: friender.id,
					// User who is accepting the request
					friendingId: user.id
				}
			},
			include: {
				friender: true
			}
		});

		const existing = await prisma.friendship
			.findUnique({
				where: {
					frienderId_friendingId: {
						frienderId: user.id,
						friendingId: pendingFriendship.frienderId
					}
				}
			})
			.friending();

		if (existing) return { record: existing };

		const followOnGitHub = async (params: FollowOnGitHubParams): Promise<void> => {
			const { from: fromLogin, to: toLogin } = params;

			const accessToken = fromLogin
				? await prisma.user
						.findUnique({
							where: { name: fromLogin },
							select: {
								accounts: {
									where: { provider: { equals: "github" } },
									select: { access_token: true }
								}
							}
						})
						.then((result) => result?.accounts[0]?.access_token ?? null)
				: undefined;

			if (accessToken === null) return;

			const githubId = await graphql`
				query GetGitHubUserToFollow($login: String!) {
					user(login: $login) {
						id
					}
				}
			`
				.cast<
					octokit.GetGitHubUserToFollowQuery,
					octokit.GetGitHubUserToFollowQueryVariables
				>({ login: toLogin })
				.then((res) => res.user?.id ?? null)
				.catch(() => null);

			if (!githubId) return;

			await graphql`
				mutation FollowGitHubUser($githubId: ID!) {
					followUser(input: { userId: $githubId }) {
						user {
							id
							login
						}
					}
				}
			`
				.from(accessToken)
				.cast<octokit.FollowGitHubUserMutation, octokit.FollowGitHubUserMutationVariables>({
					githubId
				})
				/**
				 * !HACK
				 * @description Try to follow the user on GitHub, and don't mind the error if not
				 * able to.
				 * @author David Lee
				 * @date March 7, 2022
				 */
				.catch(() => null);
		};

		const record = await prisma.$transaction(async (transaction) => {
			await transaction.friendship.update({
				where: { id: pendingFriendship.id },
				data: {
					activities: {
						create: {
							type: UserActivityType.FriendAcceptUser,
							user: { connect: { id: pendingFriendship.frienderId } }
						}
					},
					rejectedAt: { set: null }
				}
			});

			await transaction.followUser.upsert({
				where: {
					followerId_followingId: {
						followerId: user.id,
						followingId: pendingFriendship.frienderId
					}
				},
				create: {
					follow: {
						create: {
							type: FollowType.User,
							user: { connect: { id: user.id } }
						}
					},
					follower: { connect: { id: user.id } },
					following: { connect: { id: pendingFriendship.frienderId } }
				},
				update: {}
			});

			await transaction.followUser.upsert({
				where: {
					followerId_followingId: {
						followerId: pendingFriendship.frienderId,
						followingId: user.id
					}
				},
				create: {
					follow: {
						create: {
							type: FollowType.User,
							user: { connect: { id: pendingFriendship.frienderId } }
						}
					},
					follower: { connect: { id: pendingFriendship.frienderId } },
					following: { connect: { id: user.id } }
				},
				update: {}
			});

			await followOnGitHub({ to: pendingFriendship.friender.name }).catch(() => null);
			await followOnGitHub({
				from: pendingFriendship.friender.name,
				to: user.name
			}).catch(() => null);

			return transaction.friendship
				.create({
					data: {
						// Create activity for accepter
						activities: {
							create: {
								type: UserActivityType.FriendAcceptUser,
								user: { connect: { id: user.id } }
							}
						},
						notifications: {
							// Create notification for the requester that friendship accepted
							create: {
								type: NotificationType.FriendshipAccepted,
								user: { connect: { id: pendingFriendship.frienderId } }
							}
						},
						friender: { connect: { id: user.id } },
						friending: { connect: { id: pendingFriendship.frienderId } }
					}
				})
				.friending();
		});

		return { record };
	}
});
