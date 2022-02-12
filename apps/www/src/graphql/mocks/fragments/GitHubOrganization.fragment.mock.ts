import { oneLine } from "common-tags";
import { GitHubOrganization } from "../../generated";

export const GitHubOrganization_fragment_mock: GitHubOrganization = {
	__typename: "GitHubOrganization",
	avatarUrl: "https://avatars.githubusercontent.com/u/69631?s=200&v=4",
	description: oneLine`
		We are working to build community through open source technology. NB: members must have
		two-factor auth.
	`,
	id: "0",
	login: "facebook",
	name: "Meta",
	organization: null as any,
	twitterUsername: "MetaOpenSource",
	url: "https://github.com/facebook",
	websiteUrl: "https://opensource.fb.com"
};
