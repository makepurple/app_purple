import { oneLine } from "common-tags";
import { nonNull, objectType } from "nexus";
import { octokit } from "../../../services";

export const GitHubUser = objectType({
	name: "GitHubUser",
	description: oneLine`
		Data for a user from that user's connected GitHub account.
	`,
	definition: (t) => {
		t.implements("GitHubRepositoryOwner");
		t.string("bio");
		t.string("company");
		t.string("name");
		t.field("topLanguages", {
			type: nonNull("TopLanguages"),
			resolve: async (parent, args, { octokit: graphql, prisma }) => {
				const user = await prisma.user.findUnique({
					where: {
						name: parent.login
					}
				});

				if (!user?.name) return { nodes: [] };

				const userTopLanguages: octokit.GetUserTopLanguagesQuery | null = await graphql`
					query GetUserTopLanguages($login: String!) {
						user(login: $login) {
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
