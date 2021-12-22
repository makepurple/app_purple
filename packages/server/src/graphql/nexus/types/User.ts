import { NexusPrisma } from "@makepurple/prisma/nexus";
import { list, nonNull, objectType } from "nexus";
import type { octokit } from "../../../services";
import { GitHubUser } from "../../../services/octokit";

export const User = objectType({
	name: NexusPrisma.User.$name,
	description: NexusPrisma.User.$description,
	definition: (t) => {
		t.field(NexusPrisma.User.comments);
		t.field(NexusPrisma.User.description);
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
			...NexusPrisma.User.email,
			authorize: (root, args, { user }) => {
				return user?.id === root.id;
			}
		});
		t.field(NexusPrisma.User.experiences);
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

				return githubUser.user;
			}
		});
		t.nonNull.url("githubUrl", {
			resolve: ({ name }) => `https://github.com/${name}`
		});
		t.field(NexusPrisma.User.id);
		t.field(NexusPrisma.User.image);
		t.field(NexusPrisma.User.name);
		t.field(NexusPrisma.User.posts);
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
