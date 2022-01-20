import { ChatRoomMessage, ChatRoomMessageProps } from "@makepurple/www";
import { ChatMessage_fragment_mock } from "@makepurple/www/src/graphql/mocks";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/ChatRoomMessage",
	component: ChatRoomMessage
} as Meta;

const Template: Story<ChatRoomMessageProps> = (args) => {
	return <ChatRoomMessage {...args} />;
};
Template.args = {
	chatMessage: ChatMessage_fragment_mock
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
