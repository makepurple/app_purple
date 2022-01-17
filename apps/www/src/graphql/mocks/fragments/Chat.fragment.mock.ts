import { Chat } from "../../generated";
import { ChatMessage_fragment_mock } from "./ChatMessage.fragment.mock";
import { User_fragment_mock } from "./User.fragment.mock";

const MESSAGES_SIZE = 20;
const USERS_SIZE = 5;

const messages = Array.from({ length: MESSAGES_SIZE }, (_, i) => ({
	...ChatMessage_fragment_mock,
	id: `${i}`
}));

const users = Array.from({ length: USERS_SIZE }, (_, i) => ({
	...User_fragment_mock,
	id: `${i}`
}));

export const Chat_fragment_mock: Chat = {
	__typename: "Chat",
	id: "0",
	messages: {
		__typename: "ChatMessageConnection",
		pageInfo: {
			__typename: "PageInfo",
			endCursor: null,
			hasNextPage: false,
			hasPreviousPage: false,
			startCursor: null
		},
		totalCount: 0,
		edges: messages.map((message) => ({
			__typename: "ChatMessageEdge",
			cursor: message.id,
			node: message
		})),
		nodes: messages
	},
	users: {
		__typename: "UserConnection",
		pageInfo: {
			__typename: "PageInfo",
			endCursor: null,
			hasNextPage: false,
			hasPreviousPage: false,
			startCursor: null
		},
		totalCount: 0,
		edges: users.map((user) => ({
			__typename: "UserEdge",
			cursor: user.id,
			node: user
		})),
		nodes: users
	}
};
