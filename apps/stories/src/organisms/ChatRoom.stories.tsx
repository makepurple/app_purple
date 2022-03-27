import { faker } from "@faker-js/faker";
import { useWillMount } from "@makepurple/hooks";
import { PromiseUtils } from "@makepurple/utils";
import { ChatRoom, ChatRoomProps } from "@makepurple/www";
import {
	ChatMessage_fragment_mock,
	GetChat_mock,
	SuggestViewerFriends_mock
} from "@makepurple/www/src/graphql/mocks";
import { action } from "@storybook/addon-actions";
import type { Meta, Story } from "@storybook/react";
import ms from "ms";
import React from "react";
import { getOperationName, Operation } from "urql";

const MESSAGES_SIZE = 5;

export default {
	title: "organisms/ChatRoom",
	component: ChatRoom
} as Meta;

const Template: Story<ChatRoomProps> = (args) => {
	useWillMount(() => {
		faker.seed(1);
	});

	return <ChatRoom {...args} tw="height[600px]" />;
};
Template.args = {};
Template.parameters = {
	urql: async (op: Operation) => {
		const operationName = getOperationName(op.query);

		operationName && action(operationName)(op.variables);

		switch (operationName) {
			case "GetChat": {
				const messages = Array.from({ length: MESSAGES_SIZE }, () => {
					const senderId = faker.datatype.boolean() ? "0" : "1";

					return {
						...ChatMessage_fragment_mock,
						content: faker.datatype.boolean()
							? ChatMessage_fragment_mock.content
							: [
									{
										type: "paragraph",
										children: [
											{
												text: faker.lorem.sentences(
													faker.datatype.number({ min: 1, max: 5 })
												)
											}
										]
									}
							  ],
						id: faker.random.alphaNumeric(30),
						sender: {
							...ChatMessage_fragment_mock.sender,
							name: faker.datatype.boolean()
								? ChatMessage_fragment_mock.sender.name
								: faker.internet.userName(),
							id: senderId
						},
						senderId
					};
				});

				await PromiseUtils.wait(ms("2s"));

				return {
					data: {
						...GetChat_mock,
						chat: {
							...GetChat_mock.chat,
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
							}
						}
					}
				};
			}
			case "SuggestViewerFriends":
				return { data: SuggestViewerFriends_mock };
			default:
				return {};
		}
	}
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
Standard.parameters = {
	...Template.parameters
};
