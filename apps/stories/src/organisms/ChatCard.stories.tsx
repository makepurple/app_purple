import { ChatCard, ChatCardProps } from "@makepurple/www";
import { Chat_fragment_mock } from "@makepurple/www/src/graphql/mocks";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/ChatCard",
	component: ChatCard
} as Meta;

const Template: Story<ChatCardProps> = (args) => {
	return <ChatCard {...args} />;
};
Template.args = {
	chat: Chat_fragment_mock
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };

export const WithShortMessage = Template.bind({});
WithShortMessage.args = {
	...Template.args,
	chat: {
		...Chat_fragment_mock,
		messages: {
			...Chat_fragment_mock.messages,
			nodes: [
				{
					...Chat_fragment_mock.messages.nodes[0],
					content: [
						{
							type: "paragraph",
							children: [{ text: "Hello world~!" }]
						}
					]
				}
			]
		}
	}
};
