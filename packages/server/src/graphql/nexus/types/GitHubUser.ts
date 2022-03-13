import { dayjs } from "@makepurple/utils";
import { oneLine } from "common-tags";
import { arg, nonNull, objectType } from "nexus";
import type { octokit } from "../../../services";

export const GitHubUser = objectType({
	name: "GitHubUser",
	description: oneLine`
		Data for a user from that user's connected GitHub account.
	`,
	definition: (t) => {
		t.implements("GitHubRepositoryOwner");
		t.string("bio");
		t.string("company");
		t.nonNull.string("login");
		t.string("name");
		t.nonNull.field("contributionCalendar", {
			type: "GitHubUserContributionCalendar",
			resolve: async (parent, args, { octokit: graphql }) => {
				const from = dayjs().subtract(1, "year").toDate();

				const userContributions = await graphql`
					query GetUserContributionCalendar($from: DateTime!, $login: String!) {
						user(login: $login) {
							id
							contributionsCollection(from: $from) {
								contributionCalendar {
									totalContributions
									weeks {
										contributionDays {
											contributionCount
											contributionLevel
											date
											weekday
										}
										firstDay
									}
								}
							}
						}
					}
				`
					.cast<
						octokit.GetUserContributionCalendarQuery,
						octokit.GetUserContributionCalendarQueryVariables
					>({
						from,
						login: parent.login
					})
					.catch(() => null);

				const contributions =
					userContributions?.user?.contributionsCollection.contributionCalendar;

				if (!contributions) {
					throw new Error("Coult not retrieve contribution data for user");
				}

				return contributions;
			}
		});
		t.field("topLanguages", {
			type: nonNull("TopLanguages"),
			resolve: async (parent, args, { octokit: graphql, prisma }) => {
				const user = await prisma.user.findUnique({
					where: {
						name: parent.login
					}
				});

				if (!user?.name) return { nodes: [] };

				const userTopLanguages = await graphql`
					query GetUserTopLanguages($login: String!) {
						user(login: $login) {
							id
							repositories(ownerAffiliations: [OWNER], isFork: false, first: 50) {
								nodes {
									name
									languages(
										first: 10
										orderBy: { field: SIZE, direction: DESC }
									) {
										edges {
											size
											node {
												name
												color
											}
										}
									}
								}
							}
						}
					}
				`
					.cast<
						octokit.GetUserTopLanguagesQuery,
						octokit.GetUserTopLanguagesQueryVariables
					>({ login: user.name })
					.catch(() => null);

				if (!userTopLanguages?.user) return { nodes: [] };

				const repoNodes = userTopLanguages?.user.repositories.nodes ?? [];

				const _languageEdge = repoNodes?.[0]?.languages?.edges?.[0];
				type LanguageEdge = typeof _languageEdge;

				const topLangsDict = repoNodes
					// Repo must have at least 1 language
					.filter((repo) => (repo?.languages?.edges?.length ?? 0) > 0)
					// Flatten language edges
					.reduce<LanguageEdge[]>(
						(acc, repo) => [...(repo?.languages?.edges ?? []), ...acc],
						[]
					)
					// Filter and map to TopLanguage types
					.reduce<Record<string, { name: string; color: string; size: number }>>(
						(dict, languageEdge) => {
							if (!languageEdge?.node.color) return dict;

							const langName: string = languageEdge.node.name;
							const langColor: string = languageEdge.node.color;
							const langSize: number = languageEdge.size;

							const prevSize = dict[langName]?.size ?? 0;

							return {
								...dict,
								[langName]: {
									name: langName,
									color: langColor,
									size: prevSize + langSize
								}
							};
						},
						{}
					);

				const topLangs = Object.keys(topLangsDict)
					// Sort by size (descending)
					.sort((a, b) => topLangsDict[b].size - topLangsDict[a].size)
					// Return an array of TopLanguage types
					.map((langName) => topLangsDict[langName]);

				return {
					nodes: topLangs
				};
			}
		});
		t.nonNull.int("totalCommits", {
			args: {
				where: arg({ type: "GitHubUserTotalCommitsWhereInput" })
			},
			resolve: async (parent, args, { octokit: graphql, prisma }) => {
				const createdAt = args.where?.createdAt;
				const from =
					createdAt?.gt ?? createdAt?.gte ?? dayjs().subtract(1, "year").toDate();
				const to = createdAt?.lt ?? createdAt?.lte ?? undefined;

				const user = await prisma.user.findUnique({
					where: {
						name: parent.login
					}
				});

				if (!user?.name) return 0;

				const userContributions = await graphql`
					query GetUserCommitCounts($from: DateTime, $login: String!, $to: DateTime) {
						user(login: $login) {
							id
							contributionsCollection(from: $from, to: $to) {
								restrictedContributionsCount
								totalCommitContributions
							}
						}
					}
				`
					.cast<
						octokit.GetUserCommitCountsQuery,
						octokit.GetUserCommitCountsQueryVariables
					>({ from, login: user.name, to })
					.catch(() => null);

				const contributions = userContributions?.user?.contributionsCollection;

				if (!contributions) return 0;

				return (
					contributions.restrictedContributionsCount +
					contributions.totalCommitContributions
				);
			}
		});
		t.string("twitterUsername");
		t.field("user", {
			type: nonNull("User"),
			resolve: async (parent, args, { prisma }) => {
				const user = await prisma.user.findUnique({
					where: {
						name: parent.login
					}
				});

				if (!user) {
					throw new Error("User could not be found");
				}

				return user;
			}
		});
		t.string("websiteUrl");
	}
});
