import { GetUserExperiencesQuery, GetUserExperiencesQueryVariables } from "../../generated";
import { Experience_fragment_mock, User_fragment_mock } from "../fragments";

const DATA_SIZE = 10;

const experiences = Array(DATA_SIZE)
	.fill(null)
	.map((__, i) => ({
		...Experience_fragment_mock,
		__typename: "Experience" as const,
		id: i.toString()
	}));

export const GetUserExperiences_mock: GetUserExperiencesQuery = {
	__typename: "Query",
	user: {
		...User_fragment_mock,
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
	}
};

export const GetUserExperiences_variables_mock: GetUserExperiencesQueryVariables = {
	after: null,
	first: 20,
	name: "leedavidcs"
};
