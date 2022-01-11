import faker from "faker";
import { GetUserFollowingQuery, GetUserFollowingQueryVariables } from "../../generated";
import { PageInfo_fragment_mock, Skill_fragment_mock, User_fragment_mock } from "../fragments";

faker.seed(1);

const DATA_SIZE = 20;

const follows = Array.from({ length: DATA_SIZE }, (_, i) => ({
	__typename: "Follow" as const,
	id: i.toString(),
	following: faker.datatype.boolean()
		? {
				...Skill_fragment_mock,
				__typename: "Skill" as const,
				id: `0_${i}`
		  }
		: {
				...User_fragment_mock,
				__typename: "User" as const,
				id: `0_${i}`
		  }
}));

export const GetUserFollowing_mock: GetUserFollowingQuery = {
	__typename: "Query",
	user: {
		...User_fragment_mock,
		__typename: "User",
		id: "0",
		following: {
			__typename: "FollowConnection",
			pageInfo: {
				...PageInfo_fragment_mock
			},
			totalCount: DATA_SIZE,
			edges: follows.map((follow) => ({
				__typename: "FollowEdge",
				cursor: follow.id,
				node: follow
			})),
			nodes: follows as any
		}
	}
};

export const GetUserFollowing_variables_mock: GetUserFollowingQueryVariables = {
	name: "leedavidcs"
};
