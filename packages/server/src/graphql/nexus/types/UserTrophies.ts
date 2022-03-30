import { dayjs } from "@makepurple/utils";
import { stripIndents } from "common-tags";
import { objectType } from "nexus";
import type { octokit } from "../../../services";

export const UserTrophies = objectType({
	name: "UserTrophies",
	definition: (t) => {
		t.nonNull.id("id", {
			description: stripIndents`
				The id of the user who these trophies belong to
			`
		});
		t.nonNull.int("totalFollowers", {
			resolve: async (parent, args, { prisma }) => {
				return await prisma.user
					.findUnique({
						where: { id: parent.id },
						select: {
							_count: { select: { followedBy: true } }
						}
					})
					.then((result) => result?._count.followedBy ?? 0);
			}
		});
		t.nonNull.int("totalPostViews", {
			resolve: async (parent, args, { prisma }) => {
				const result = await prisma.postViewer.aggregate({
					_count: { _all: true },
					where: {
						post: {
							author: { id: { equals: parent.id } }
						}
					}
				});

				return result._count._all;
			}
		});
		t.nonNull.int("totalSkills", {
			resolve: async (parent, args, { prisma }) => {
				return await prisma.user
					.findUnique({
						where: { id: parent.id },
						select: {
							_count: { select: { skills: true } }
						}
					})
					.then((result) => result?._count.skills ?? 0);
			}
		});
		t.nonNull.int("totalUpvotes", {
			resolve: async (parent, args, { prisma }) => {
				const postUpvoters = await prisma.postUpvoter.aggregate({
					_count: { _all: true },
					where: {
						post: {
							author: { id: { equals: parent.id } }
						}
					}
				});

				const codeExampleUpvoters = await prisma.codeExampleUpvoter.aggregate({
					_count: { _all: true },
					where: {
						codeExample: {
							author: { id: { equals: parent.id } }
						}
					}
				});

				const commentUpvoters = await prisma.commentUpvoter.aggregate({
					_count: { _all: true },
					where: {
						comment: {
							author: { id: { equals: parent.id } }
						}
					}
				});

				const postUpvotes = postUpvoters._count._all;
				const codeExampleUpvotes = codeExampleUpvoters._count._all;
				const commentUpvotes = commentUpvoters._count._all;

				return postUpvotes + codeExampleUpvotes + commentUpvotes;
			}
		});
		t.nonNull.int("totalYearlyCommits", {
			resolve: async (parent, args, { octokit: graphql, prisma }) => {
				const from = dayjs().subtract(1, "year").toDate();

				const user = await prisma.user.findUnique({
					where: {
						id: parent.id
					}
				});

				if (!user?.name) return 0;

				const userContributions = await graphql`
					query GetUserTrophyCommitCounts($from: DateTime!, $login: String!) {
						user(login: $login) {
							id
							contributionsCollection(from: $from) {
								restrictedContributionsCount
								totalCommitContributions
							}
						}
					}
				`
					.cast<
						octokit.GetUserTrophyCommitCountsQuery,
						octokit.GetUserTrophyCommitCountsQueryVariables
					>({ from, login: user.name })
					.catch(() => null);

				const contributions = userContributions?.user?.contributionsCollection;

				if (!contributions) return 0;

				return (
					contributions.restrictedContributionsCount +
					contributions.totalCommitContributions
				);
			}
		});
		t.nonNull.int("totalYearlyPosts", {
			resolve: async (parent, args, { prisma }) => {
				const from = dayjs().subtract(1, "year").toDate();

				return await prisma.post.count({
					where: {
						author: { id: parent.id },
						publishedAt: { gte: from },
						urlSlug: { not: { equals: "draft" } }
					}
				});
			}
		});
	}
});
