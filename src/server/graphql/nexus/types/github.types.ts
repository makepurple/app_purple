import { octokit } from "@/server/services";
import { oneLine } from "common-tags";
import { nonNull, objectType } from "nexus";

export const githubTypes = [
	objectType({
		name: "TopLanguage",
		description: oneLine`
			One of the most used languages by a user
		`,
		definition: (t) => {
			t.nonNull.string("name", {
				description: oneLine`
					The name of the language.
				`
			});
			t.nonNull.string("color", {
				description: oneLine`
					The color of the language, defined by GitHub
				`
			});
			t.nonNull.int("size", {
				description: oneLine`
					The sum of number of bytes written across all owned repositories in this
					language.
				`
			});
		}
	}),
	objectType({
		name: "TopLanguages",
		description: oneLine`
			The most used languages by a user, determined by number of bytes written to repositories
			owned by the user on GitHub.
		`,
		definition: (t) => {
			t.nonNull.list.nonNull.field("nodes", { type: "TopLanguage" });
			t.nonNull.int("totalSize", {
				description: oneLine`
					The total number of bytes written across all owned repositories across all
					languages.
				`,
				resolve: ({ nodes }) => nodes.reduce((sum, node) => sum + node.size, 0)
			});
			t.nonNull.int("totalCount", {
				description: oneLine`
					The total number of languages across all owned repositories.
				`,
				resolve: ({ nodes }) => nodes.length
			});
		}
	}),
	objectType({
		name: "UserGitHub",
		description: oneLine`
			Data for a user from that user's connected GitHub account.
		`,
		definition: (t) => {
			t.string("bio");
			t.string("company");
			t.string("name");
			t.field("topLanguages", {
				type: nonNull("TopLanguages"),
				resolve: async (parent, args, { octokit: graphql }) => {
					const userTopLanguages = await graphql<
						octokit.GetUserTopLanguagesQuery,
						octokit.GetUserTopLanguagesQueryVariables
					>`
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
					`({ login: parent.user.name });

					const repoNodes = userTopLanguages.user?.repositories.nodes ?? [];

					const _languageEdge = repoNodes?.[0]?.languages?.edges?.[0];
					type LanguageEdge = typeof _languageEdge;

					const topLangsDict = (userTopLanguages.user?.repositories.nodes ?? [])
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
			t.nonNull.url("url", {
				description: oneLine`
					The URL of the user's GitHub profile.
				`
			});
			t.nonNull.field("user", { type: "User" });
			t.string("websiteUrl");
		}
	})
];
