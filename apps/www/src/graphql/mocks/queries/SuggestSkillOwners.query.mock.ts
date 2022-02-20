import { SuggestSkillOwnersQuery } from "../../generated";
import { GitHubOrganization_fragment_mock, GitHubUser_fragment_mock } from "../fragments";

const organizationLogins = ["facebook", "openbaseio", "toastel", "onfleet", "outwardinc"];
const userLogins = ["leedavidcs", "dsklyar", "jameshly", "haejinjo", "OwlsAreCool1"] as const;

const organizations = organizationLogins.map((login, i) => ({
	...GitHubOrganization_fragment_mock,
	__typename: "GitHubOrganization" as const,
	id: `${i}`,
	login,
	name: login
}));

const users = userLogins.map((login, i) => ({
	...GitHubUser_fragment_mock,
	id: `${organizationLogins.length + i}`,
	login,
	name: login
}));

const nodes = [...organizations, ...users];

export const SuggestSkillOwners_mock: SuggestSkillOwnersQuery = {
	__typename: "Query",
	suggestSkillOwners: {
		__typename: "SuggestSkillOwners",
		totalCount: organizationLogins.length,
		nodes
	}
};
