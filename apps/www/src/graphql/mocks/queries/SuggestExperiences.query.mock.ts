import { SuggestExperiencesQuery } from "../../generated";
import { GitHubOrganization_fragment_mock } from "../fragments";

const DATA_SIZE = 5;

export const SuggestExperiences_mock: SuggestExperiencesQuery = {
	__typename: "Query",
	suggestExperiences: {
		__typename: "SuggestExperiences",
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
