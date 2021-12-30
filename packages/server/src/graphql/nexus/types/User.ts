import { findManyCursorConnection } from "@devoxa/prisma-relay-cursor-connection";
import { NexusPrisma } from "@makepurple/prisma/nexus";
import { Comment as _Comment } from "@prisma/client";
import { arg, intArg, objectType, stringArg } from "nexus";
import type { octokit } from "../../../services";
import { GitHubUser } from "../../../services/octokit";
import { PrismaUtils } from "../../../utils";

export const User = objectType({
	name: NexusPrisma.User.$name,
	description: NexusPrisma.User.$description,
	definition: (t) => {
		t.nonNull.field("comments", {
			type: "CommentConnection",
			args: {
				after: stringArg(),
				before: stringArg(),
				first: intArg(),
				last: intArg(),
				where: arg({ type: "CommentWhereInput" }),
				orderBy: arg({ type: "CommentOrderByInput" })
			},
			resolve: async (parent, args, { prisma }) => {
				const user = prisma.user.findUnique({ where: { id: parent.id } });

				const connection = await findManyCursorConnection<_Comment, { id: string }>(
					(paginationArgs) =>
						user.comments({
							...paginationArgs,
							where: PrismaUtils.nonNull(args.where),
							orderBy: PrismaUtils.nonNull(args.orderBy)
						}),
					() => prisma.comment.count(),
					{ ...PrismaUtils.handleRelayConnectionArgs(args) },
					{ ...PrismaUtils.handleRelayCursor }
				);

				return connection;
			}
		});
		t.field(NexusPrisma.User.description);
		t.nonNull.list.nonNull.field("desiredSkills", {
			type: "Skill",
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
		t.nonNull.field("github", {
			type: "GitHubUser",
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
		t.field(NexusPrisma.User.repositories);
		t.nonNull.list.nonNull.field("skills", {
			type: "Skill",
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
		t.nonNull.list.nonNull.field("upvotedPosts", {
			type: "Post",
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
