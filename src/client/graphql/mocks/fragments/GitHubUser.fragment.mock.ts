import type { GitHubUser } from "@/client/graphql/generated";
import { TopLanguages_fragment_mock } from "./TopLanguages.fragment.mock";

export const GitHubUser_fragment_mock: GitHubUser = {
	__typename: "GitHubUser",
	id: "0",
	avatarUrl: "https://avatars.githubusercontent.com/u/15151154?v=4",
	bio: "I learn things and work on MakePurple",
	company: "Openbase",
	login: "leedavidcs",
	name: "David Lee",
	topLanguages: {
		...TopLanguages_fragment_mock,
		__typename: "TopLanguages"
	},
	twitterUsername: "i3daly",
	url: "https://github.com/leedavidcs",
	user: null as any,
	websiteUrl: "https://leedavidcs.dev"
};
