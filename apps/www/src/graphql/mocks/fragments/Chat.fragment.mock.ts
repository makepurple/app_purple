import { faker } from "@faker-js/faker";
import { dayjs } from "@makepurple/utils";
import { Chat } from "../../generated";
import { ChatMessage_fragment_mock } from "./ChatMessage.fragment.mock";
import { User_fragment_mock } from "./User.fragment.mock";

faker.seed(1);

const MESSAGES_SIZE = 5;
const USERS_SIZE = 5;

const messages = Array.from({ length: MESSAGES_SIZE }, (_, i) => {
	const senderId = faker.datatype.boolean() ? "0" : "1";

	return {
		...ChatMessage_fragment_mock,
		id: `${i}`,
		sender: {
			...ChatMessage_fragment_mock.sender,
			id: senderId
		},
		senderId
	};
});

const users = Array.from({ length: USERS_SIZE }, (_, i) => ({
	...User_fragment_mock,
	id: `${i}`,
	name: faker.name.firstName()
}));

export const Chat_fragment_mock: Chat = {
	__typename: "Chat",
	channelName: "chat@0",
	id: "0",
	lastOpenedAt: dayjs(1318781876406).toDate(),
	messages: {
		__typename: "ChatMessageConnection",
		pageInfo: {
			__typename: "PageInfo",
			endCursor: null,
			hasNextPage: false,
			hasPreviousPage: false,
			startCursor: null
		},
		totalCount: MESSAGES_SIZE,
		edges: messages.map((message) => ({
			__typename: "ChatMessageEdge",
			cursor: message.id,
			node: message
		})),
		nodes: messages
	},
	newMessagesCount: 5,
	opened: false,
	updatedAt: dayjs(1318781876406).toDate(),
	users: {
		__typename: "UserConnection",
		pageInfo: {
			__typename: "PageInfo",
			endCursor: null,
			hasNextPage: false,
			hasPreviousPage: false,
			startCursor: null
		},
		totalCount: USERS_SIZE,
		edges: users.map((user) => ({
			__typename: "UserEdge",
			cursor: user.id,
			node: user
		})),
		nodes: users
	}
};
