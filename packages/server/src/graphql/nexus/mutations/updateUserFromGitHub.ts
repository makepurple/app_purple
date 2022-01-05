import { mutationField, nonNull } from "nexus";
import { octokit } from "../../../services";
import { GitHubUser } from "../../../services/octokit";

export const updateUserFromGitHub = mutationField("updateUserFromGitHub", {
	type: nonNull("UpdateUserFromGitHubPayload"),
	authorize: (parent, args, { user }) => {
		return !!user;
	},
	resolve: async (parent, args, { octokit: graphql, prisma, user }) => {
		if (!user) throw new Error();

		const githubViewer = await graphql`
			query GetUserForUpdateUserFromGitHub {
				viewer {
					...GitHubUser
				}
			}
			${GitHubUser}
		`
			.cast<
				octokit.GetUserForUpdateUserFromGitHubQuery,
				octokit.GetUserForUpdateUserFromGitHubQueryVariables
			>()
			.then((result) => result.viewer)
			.catch(() => null);

		const record = await prisma.user.update({
			where: { id: user.id },
			data: {
				description: githubViewer?.bio,
				image: githubViewer?.avatarUrl
			}
		});

		return { record };
	}
});
