import type { GetUserOverviewQuery, GetUserOverviewQueryVariables } from "../../generated";
import {
	CodeExample_fragment_mock,
	Experience_fragment_mock,
	Post_fragment_mock,
	Repository_fragment_mock,
	User_fragment_mock
} from "../fragments";

const CODE_EXAMPLES_SIZE = 2;
const EXPERIENCES_SIZE = 3;
const REPOSITORIES_SIZE = 2;

const codeExamples = Array.from({ length: CODE_EXAMPLES_SIZE }, (_, i) => ({
	...CodeExample_fragment_mock,
	__typename: "CodeExample" as const,
	id: i.toString()
}));

const experiences = Array.from({ length: EXPERIENCES_SIZE }, (_, i) => ({
	...Experience_fragment_mock,
	__typename: "Experience" as const,
	id: i.toString()
}));

const repositories = Array.from({ length: REPOSITORIES_SIZE }, (_, i) => ({
	...Repository_fragment_mock,
	__typename: "Repository" as const,
	id: i.toString()
}));

export const GetUserOverview_mock: GetUserOverviewQuery = {
	__typename: "Query",
	user: {
		...User_fragment_mock,
		__typename: "User",
		id: "0",
		codeExamples: {
			__typename: "CodeExampleConnection",
			totalCount: CODE_EXAMPLES_SIZE + 5,
			edges: codeExamples.map((codeExample) => ({
				__typename: "CodeExampleEdge",
				cursor: codeExample.id.toString(),
				node: codeExample as any
			})),
			nodes: codeExamples.map((codeExample) => codeExample as any)
		},
		experiences: {
			__typename: "ExperienceConnection",
			totalCount: EXPERIENCES_SIZE + 5,
			edges: experiences.map((experience) => ({
				__typename: "ExperienceEdge",
				cursor: experience.id.toString(),
				node: experience
			})),
			nodes: experiences.map((experience) => experience)
		},
		posts: {
			__typename: "PostConnection",
			totalCount: 20,
			edges: [
				{
					__typename: "PostEdge",
					cursor: Post_fragment_mock.id,
					node: Post_fragment_mock
				}
			],
			nodes: [Post_fragment_mock as any]
		},
		repositories: {
			__typename: "RepositoryConnection",
			totalCount: REPOSITORIES_SIZE + 5,
			edges: repositories.map((repository) => ({
				__typename: "RepositoryEdge",
				cursor: repository.id.toString(),
				node: repository
			})),
			nodes: repositories.map((repository) => repository) as any
		}
	}
};

export const GetUserOverview_variables_mock: GetUserOverviewQueryVariables = {
	name: "leedavidcs"
};
