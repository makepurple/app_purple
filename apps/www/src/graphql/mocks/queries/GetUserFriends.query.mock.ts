import type { GetUserFriendsQuery, GetUserFriendsQueryVariables } from "../../generated";
import { PageInfo_fragment_mock, User_fragment_mock } from "../fragments";

const DATA_SIZE = 20;

const users = Array.from({ length: DATA_SIZE }, (_, i) => ({
	...User_fragment_mock,
	id: i.toString(),
	viewerIsFriend: true
}));

export const GetUserFriends_mock: GetUserFriendsQuery = {
	__typename: "Query",
	user: {
		...User_fragment_mock,
		__typename: "User",
		id: "0",
		friends: {
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

export const GetUserFriends_variables_mock: GetUserFriendsQueryVariables = {
	name: "leedavidcs"
};
