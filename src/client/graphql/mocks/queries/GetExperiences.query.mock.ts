import { GetExperiencesQuery, GetExperiencesQueryVariables } from "@/client/graphql/generated";
import { Experience_fragment_mock } from "@/client/graphql/mocks";

const DATA_SIZE = 10;

const experiences = Array(DATA_SIZE)
	.fill(null)
	.map((__, i) => ({
		...Experience_fragment_mock,
		__typename: "Experience" as const,
		id: i
	}));

export const GetExperiences_mock: GetExperiencesQuery = {
	__typename: "Query",
	experiences: {
		__typename: "ExperienceConnection",
		edges: experiences.map((experience) => ({
			__typename: "ExperienceEdge",
			cursor: experience.id.toString(),
			node: experience
		})),
		nodes: experiences.map((experience) => experience),
		pageInfo: {
			__typename: "PageInfo",
			endCursor: null,
			hasNextPage: false,
			hasPreviousPage: false,
			startCursor: null
		}
	}
};

export const GetExperiences_variables_mock: GetExperiencesQueryVariables = {
	after: null,
	first: 20,
	where: {
		user: {
			name: {
				equals: "leedavidcs"
			}
		}
	}
};