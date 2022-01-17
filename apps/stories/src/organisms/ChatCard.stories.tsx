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
