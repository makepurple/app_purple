import type { GetUserFollowersQuery, GetUserFollowersQueryVariables } from "../../generated";
import { PageInfo_fragment_mock, User_fragment_mock } from "../fragments";

const DATA_SIZE = 20;

const users = Array.from({ length: DATA_SIZE }, (_, i) => ({
	...User_fragment_mock,
	id: i.toString()
}));

export const GetUserFollowers_mock: GetUserFollowersQuery = {
	__typename: "Query",
	user: {
		...User_fragment_mock,
		__typename: "User",
		id: "0",
		followers: {
			__typename: "UserConnection",
			pageInfo: {
				...PageInfo_fragment_mock
			},
			totalCount: DATA_SIZE,
			edges: users.map((user) => ({
				__typename: "UserEdge",
				cursor: user.id,
				node: user
			})),
			nodes: users
		}
	}
};

export const GetUserFollowers_variables_mock: GetUserFollowersQueryVariables = {
	name: "leedavidcs"
};
