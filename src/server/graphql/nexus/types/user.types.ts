import { octokit } from "@/server/services";
import { list, nonNull, objectType } from "nexus";
import { User } from "nexus-prisma";

export const userTypes = [
	objectType({
		name: User.$name,
		description: User.$description,
		definition: (t) => {
			t.field(User.id);
			t.field(User.name);
			t.field({
				...User.email,
				authorize: (root, args, { user }) => {
					return user?.id === root.id;
				}
			});
			t.field(User.image);
			t.field("skills", {
				type: nonNull(list(nonNull("Skill"))),
				resolve: (root, args, { prisma }) => {
					return prisma.skillsOnUsers
						.findMany({
							where: { userId: root.id },
							select: { skill: true }
						})
						.then((skills) => skills.map((s) => s.skill));
				}
			});
			t.field(User.posts);
			t.field(User.comments);
			t.field(User.githubLogin);
			t.nonNull.url("githubUrl", {
				resolve: ({ githubLogin }) => `https://github.com/${githubLogin}`
			});
			t.field("github", {
				type: nonNull("UserGitHub"),
				resolve: async (parent, args, { octokit: graphql }) => {
					const userGithub = await graphql<
						octokit.GetUserGitHubQuery,
						octokit.GetUserGitHubQueryVariables
					>`
						query GetUserGitHub($login: String!) {
							user(login: $login) {
								bio
								company
								twitterUsername
								url
								websiteUrl
							}
						}
					`({ login: parent.githubLogin }).catch(() => null);

					if (!userGithub?.user) {
						throw new Error("Could not get user's GitHub data");
					}

					return {
						user: parent,
						...userGithub.user
					};
				}
			});
		}
	})
];
