import type { octokit } from "@/server/services";
import { GitHubUser } from "@/server/services/octokit";
import { list, nonNull, objectType } from "nexus";
import { User as _User } from "nexus-prisma";

export const User = objectType({
	name: _User.$name,
	description: _User.$description,
	definition: (t) => {
		t.field(_User.comments);
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
			..._User.email,
			authorize: (root, args, { user }) => {
				return user?.id === root.id;
			}
		});
		t.field("github", {
			type: nonNull("GitHubUser"),
			resolve: async (parent, args, { octokit: graphql }) => {
				const githubUser = await graphql`
					query GetGitHubUser($login: String!) {
						user(login: $login) {
							...GitHubUser
						}
					}
					${GitHubUser}
				`
					.cast<octokit.GetGitHubUserQuery, octokit.GetGitHubUserQueryVariables>({
						login: parent.name
					})
					.catch(() => null);

				if (!githubUser?.user) {
					throw new Error("Could not get user's GitHub data");
				}

				return {
					user: parent,
					...githubUser.user
				};
			}
		});
		t.nonNull.url("githubUrl", {
			resolve: ({ name }) => `https://github.com/${name}`
		});
		t.field(_User.id);
		t.field(_User.image);
		t.field(_User.name);
		t.field(_User.posts);
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
});
