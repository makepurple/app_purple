import { faker } from "@faker-js/faker";
import { SuggestFriendsQuery } from "../../generated";
import { PageInfo_fragment_mock, Post_fragment_mock, User_fragment_mock } from "../fragments";

faker.seed(1);

const DATA_SIZE = 100;

const users = Array.from({ length: DATA_SIZE }, (_, i) => ({
	...User_fragment_mock,
	id: i.toString(),
	posts: {
		__typename: "PostConnection" as const,
		nodes: faker.datatype.boolean() ? [Post_fragment_mock] : []
	}
}));

export const SuggestFriends_mock: SuggestFriendsQuery = {
	__typename: "Query",
	suggestFriends: {
		__typename: "UserConnection",
		pageInfo: {
			...PageInfo_fragment_mock
		},
		edges: users.map((user) => ({
			__typename: "UserEdge",
			cursor: user.id,
			node: user
		})),
		nodes: users
	}
};
