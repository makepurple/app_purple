import { SuggestOrganizationsQuery } from "../../generated";
import { GitHubOrganization_fragment_mock } from "../fragments";

const DATA_SIZE = 5;

export const SuggestOrganizations_mock: SuggestOrganizationsQuery = {
	__typename: "Query",
	suggestOrganizations: {
		__typename: "SuggestOrganizations",
		totalCount: 5,
		nodes: Array(DATA_SIZE)
			.fill(null)
			.map((__, i) => ({
				...GitHubOrganization_fragment_mock,
				__typename: "GitHubOrganization",
				id: i.toString()
			}))
	}
};
