import { GetUserSummarySidebarQuery } from "@/client/graphql/generated";

export const GetUserSummarySidebar_mock: GetUserSummarySidebarQuery = {
	user: {
		__typename: "User",
		id: 1,
		name: "leedavidcs",
		image: "https://avatars.githubusercontent.com/u/15151154?v=4",
		github: {
			__typename: "UserGitHub",
			bio: "I learn things and work on Openbase.",
			company: "Openbase",
			twitterUsername: null,
			url: "https://github.com/leedavidcs",
			websiteUrl: "leedavidcs.dev",
			topLanguages: {
				__typename: "TopLanguages",
				totalSize: 1528935,
				nodes: [
					{
						__typename: "TopLanguage",
						name: "TypeScript",
						color: "#2b7489",
						size: 1411282
					},
					{
						__typename: "TopLanguage",
						name: "JavaScript",
						color: "#f1e05a",
						size: 73148
					},
					{
						__typename: "TopLanguage",
						name: "CSS",
						color: "#563d7c",
						size: 26766
					},
					{
						__typename: "TopLanguage",
						name: "HTML",
						color: "#e34c26",
						size: 7331
					},
					{
						__typename: "TopLanguage",
						name: "SCSS",
						color: "#c6538c",
						size: 4047
					},
					{
						__typename: "TopLanguage",
						name: "Haxe",
						color: "#df7900",
						size: 3287
					},
					{
						__typename: "TopLanguage",
						name: "Shell",
						color: "#89e051",
						size: 1658
					},
					{
						__typename: "TopLanguage",
						name: "Dockerfile",
						color: "#384d54",
						size: 1416
					}
				]
			}
		}
	}
};
