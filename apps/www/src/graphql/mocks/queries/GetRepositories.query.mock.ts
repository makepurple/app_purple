import { GetRepositoriesQuery, GetRepositoriesQueryVariables } from "../../generated";
import { Repository_fragment_mock } from "../fragments";

const DATA_SIZE = 10;

const repositories = Array(DATA_SIZE)
	.fill(null)
	.map((_, i) => ({
		...Repository_fragment_mock,
		__typename: "Repository" as const,
		id: i.toString(),
		github: {
			...Repository_fragment_mock.github,
			owner: {
				...Repository_fragment_mock.github.owner,
				login: "leedavidcs"
			}
		}
	}));

export const GetRepositories_mock: GetRepositoriesQuery = {
	__typename: "Query",
	repositories: {
		__typename: "RepositoryConnection",
		edges: repositories.map((repository) => ({
			__typename: "RepositoryEdge",
			cursor: repository.id.toString(),
			node: repository
		})),
		nodes: repositories.map((repository) => repository) as any,
		pageInfo: {
			__typename: "PageInfo",
			endCursor: null,
			hasNextPage: false,
			hasPreviousPage: false,
			startCursor: null
		}
	}
};

export const GetRepositories_variables_mock: GetRepositoriesQueryVariables = {
	after: null,
	first: DATA_SIZE,
	where: {
		user: {
			name: {
				equals: "leedavidcs"
			}
		}
	}
};
