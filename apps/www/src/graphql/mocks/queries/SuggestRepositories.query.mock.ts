import { GitHubRepository_fragment_mock } from "..";
import { SuggestRepositoriesQuery } from "../../generated";

const DATA_SIZE = 5;

export const SuggestRepositories_mock: SuggestRepositoriesQuery = {
	__typename: "Query",
	suggestRepositories: {
		__typename: "SuggestRepositories",
		totalCount: 5,
		nodes: Array(DATA_SIZE)
			.fill(null)
			.map((__, i) => ({
				...GitHubRepository_fragment_mock,
				id: i.toString()
			}))
	}
};
