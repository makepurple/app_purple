import type { GetUserOverviewQuery, GetUserOverviewQueryVariables } from "../../generated";
import {
	Experience_fragment_mock,
	Post_fragment_mock,
	Repository_fragment_mock,
	User_fragment_mock
} from "../fragments";
import { UserTrophies_fragment_mock } from "../fragments/UserTrophies.fragment.mock";

const EXPERIENCES_SIZE = 3;

const experiences = Array.from({ length: EXPERIENCES_SIZE }, (_, i) => ({
	...Experience_fragment_mock,
	__typename: "Experience" as const,
	id: i.toString()
}));

const REPOSITORIES_SIZE = 2;

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
			nodes: [Post_fragment_mock]
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
		},
		trophies: {
			...UserTrophies_fragment_mock,
			totalFollowers: 5,
			totalPostViews: 1_700,
			totalSkills: 42,
			totalUpvotes: 2_100,
			totalYearlyCommits: 1_200,
			totalYearlyPosts: 21
		}
	} as any
};

export const GetUserOverview_variables_mock: GetUserOverviewQueryVariables = {
	name: "leedavidcs"
};
