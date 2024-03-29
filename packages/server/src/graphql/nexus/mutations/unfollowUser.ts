import { arg, mutationField, nonNull } from "nexus";
import { octokit } from "../../../services";
import { PrismaUtils } from "../../../utils";

export const unfollowUser = mutationField("unfollowUser", {
	type: nonNull("UnfollowUserPayload"),
	args: {
		where: nonNull(arg({ type: "UserWhereUniqueInput" }))
	},
	authorize: (parent, args, { user }) => {
		return !!user;
	},
	resolve: async (parent, args, { octokit: graphql, prisma, user }) => {
		if (!user) throw new Error();

		const following = await prisma.user.findUnique({
			where: PrismaUtils.nonNull(args.where)
		});

		if (!following) throw new Error("This user does not exist.");

		const follow = await prisma.followUser
			.findUnique({
				where: {
					followerId_followingId: {
						followerId: user.id,
						followingId: following.id
					}
				}
			})
			.follow();

		if (!follow) throw new Error();

		const record = await prisma.$transaction(async (transaction) => {
			const deleted = await transaction.follow
				.delete({
					where: {
						id: follow.id
					}
				})
				.followingUser({
					include: { following: true }
				});

			return deleted?.following;
		});

		const githubId = await graphql`
			query GetGitHubUserToUnfollow($login: String!) {
				user(login: $login) {
					id
				}
			}
		`
			.cast<
				octokit.GetGitHubUserToUnfollowQuery,
				octokit.GetGitHubUserToUnfollowQueryVariables
			>({
				login: following.name
			})
			.then((res) => res.user?.id ?? null)
			.catch(() => null);

		if (githubId) {
			await graphql`
				mutation UnfollowGitHubUser($githubId: ID!) {
					unfollowUser(input: { userId: $githubId }) {
						user {
							id
							login
						}
					}
				}
			`
				.cast<
					octokit.UnfollowGitHubUserMutation,
					octokit.UnfollowGitHubUserMutationVariables
				>({ githubId })
				/**
				 * !HACK
				 * @description Try to unfollow the user on GitHub, and don't mind the error if not
				 * able to.
				 * @author David Lee
				 * @date March 7, 2022
				 */
				.catch(() => null);
		}

		return { record };
	}
});
