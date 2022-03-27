import { faker } from "@faker-js/faker";
import { GetChatsQuery, GetChatsQueryVariables } from "../../generated";
import { Chat_fragment_mock } from "../fragments";

faker.seed(1);

const DATA_SIZE = 8;

const chats = Array.from({ length: DATA_SIZE }, (_, i) => ({
	...Chat_fragment_mock,
	newMessagesCount: faker.datatype.boolean() ? faker.datatype.number({ min: 1, max: 10 }) : 0,
	id: `${i}`
}));

export const GetChats_mock: GetChatsQuery = {
	__typename: "Query",
	viewer: {
		__typename: "User",
		id: "0",
		chats: {
			__typename: "ChatConnection",
			pageInfo: {
				__typename: "PageInfo",
				endCursor: null,
				hasNextPage: false,
				hasPreviousPage: false,
				startCursor: null
			},
			edges: chats.map((chat) => ({
				__typename: "ChatEdge",
				cursor: chat.id,
				node: chat
			})),
			nodes: chats
		}
	}
};

export const GetChats_variables_mock: GetChatsQueryVariables = {
	first: DATA_SIZE,
	where: {
		user: {
			name: {
				contains: ""
			}
		}
	}
};
