import type { octokit } from "@/server/services";
import { list, nonNull, objectType } from "nexus";
import { User } from "nexus-prisma";

export const userTypes = [
	objectType({
		name: User.$name,
		description: User.$description,
		definition: (t) => {
			t.field(User.comments);
			t.field("desiredSkills", {
				type: nonNull(list(nonNull("Skill"))),
				resolve: (root, args, { prisma }) => {
					return prisma.desiredSkillsOnUsers
						.findMany({
							where: { userId: root.id },
							select: { skill: true }
						})
						.then((skills) => skills.map((s) => s.skill));
				}
			});
			t.field({
				...User.email,
				authorize: (root, args, { user }) => {
					return user?.id === root.id;
				}
			});
			t.field("github", {
				type: nonNull("UserGitHub"),
				resolve: async (parent, args, { octokit: graphql }) => {
					const userGithub = await graphql`
						query GetUserGitHub($login: String!) {
							user(login: $login) {
								bio
								company
								name
								twitterUsername
								url
								websiteUrl
							}
						}
					`
						.cast<octokit.GetUserGitHubQuery, octokit.GetUserGitHubQueryVariables>({
							login: parent.name
						})
						.catch(() => null);

					if (!userGithub?.user) {
						throw new Error("Could not get user's GitHub data");
					}

					return {
						user: parent,
						...userGithub.user
					};
				}
			});
			t.nonNull.url("githubUrl", {
				resolve: ({ name }) => `https://github.com/${name}`
			});
			t.field(User.id);
			t.field(User.image);
			t.field(User.name);
			t.field(User.posts);
			t.field("skills", {
				type: nonNull(list(nonNull("Skill"))),
				resolve: async ({ id }, args, { prisma }) => {
					return await prisma.user
						.findUnique({
							where: { id }
						})
						.skills({
							select: { skill: true }
						})
						.then((skills) => skills.map((s) => s.skill));
				}
			});
			t.field("upvotedPosts", {
				type: nonNull(list(nonNull("Post"))),
				resolve: async ({ id }, args, { prisma }) => {
					return await prisma.user
						.findUnique({
							where: { id }
						})
						.upvotedPosts({
							select: { post: true }
						})
						.then((posts) => posts.map((p) => p.post));
				}
			});
		}
	})
];
