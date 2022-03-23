import { FollowType, UserActivityType } from "@prisma/client";
import { arg, mutationField, nonNull } from "nexus";
import { octokit } from "../../../services";
import { NotFoundError, PrismaUtils } from "../../../utils";

export const followUser = mutationField("followUser", {
	type: nonNull("FollowUserPayload"),
	args: {
		where: nonNull(arg({ type: "UserWhereUniqueInput" }))
	},
	authorize: (parent, args, { user }) => {
		return !!user;
	},
	resolve: async (parent, args, { octokit: graphql, prisma, user }) => {
		if (!user) throw new Error();

		const toFollow = await prisma.user.findUnique({
			where: PrismaUtils.nonNull(args.where)
		});

		if (!toFollow) throw new NotFoundError("This user could not be found");
		if (toFollow.name === user.name) throw new Error("Cannot follow yourself!");

		const record = await prisma.followUser
			.create({
				data: {
					follow: {
						create: {
							activities: {
								create: {
									type: UserActivityType.FollowUser,
									user: { connect: { id: user.id } }
								}
							},
							type: FollowType.User,
							user: { connect: { id: user.id } }
						}
					},
					follower: { connect: { id: user.id } },
					following: {
						connect: PrismaUtils.nonNull(args.where)
					}
				}
			})
			.following();

		if (!record) throw new Error();

		const githubId = await graphql`
			query GetGitHubUserToFollow($login: String!) {
				user(login: $login) {
					id
				}
			}
		`
			.cast<octokit.GetGitHubUserToFollowQuery, octokit.GetGitHubUserToFollowQueryVariables>({
				login: record.name
			})
			.then((res) => res.user?.id ?? null)
			.catch(() => null);

		if (githubId) {
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
		}

		return { record };
	}
});
