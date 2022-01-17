import { GetChatsQuery, GetChatsQueryVariables } from "../../generated";
import { Chat_fragment_mock } from "../fragments";

const DATA_SIZE = 10;

const chats = Array.from({ length: DATA_SIZE }, (_, i) => ({
	...Chat_fragment_mock,
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
