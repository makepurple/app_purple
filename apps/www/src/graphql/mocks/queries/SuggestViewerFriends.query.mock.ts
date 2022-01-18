import { SuggestViewerFriendsQuery } from "../../generated";
import { User_fragment_mock } from "../fragments";

const DATA_SIZE = 5;

const userNames = ["leedavidcs", "dsklyar", "jameshly", "haejinjo", "OwlsAreCool1"] as const;

const users = Array.from({ length: DATA_SIZE }, (_, i) => ({
	...User_fragment_mock,
	id: `${i}`,
	name: userNames[i]
}));

export const SuggestViewerFriends_mock: SuggestViewerFriendsQuery = {
	__typename: "Query",
	viewer: {
		__typename: "User",
		id: "0",
		friends: {
			__typename: "UserConnection",
			pageInfo: {
				__typename: "PageInfo",
				endCursor: null,
				hasNextPage: false,
				hasPreviousPage: false,
				startCursor: null
			},
			edges: users.map((user) => ({
				__typename: "UserEdge",
				cursor: user.id,
				node: user
			})),
			nodes: users
		}
	}
};
