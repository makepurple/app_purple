import { SuggestSkillOwnersQuery } from "../../generated";
import { GitHubOrganization_fragment_mock, GitHubUser_fragment_mock } from "../fragments";

const ORGANIZATIONS_SIZE = 5;
const userNames = ["leedavidcs", "dsklyar", "jameshly", "haejinjo", "OwlsAreCool1"] as const;

const organizations = Array.from({ length: ORGANIZATIONS_SIZE }, (_, i) => ({
	...GitHubOrganization_fragment_mock,
	__typename: "GitHubOrganization" as const,
	id: `${i}`
}));

const users = userNames.map((userName, i) => ({
	...GitHubUser_fragment_mock,
	id: `${ORGANIZATIONS_SIZE + i}`,
	login: userName,
	name: userName
}));

const nodes = [...organizations, ...users];

export const SuggestSkillOwners_mock: SuggestSkillOwnersQuery = {
	__typename: "Query",
	suggestSkillOwners: {
		__typename: "SuggestSkillOwners",
		totalCount: 5,
		nodes
	}
};
