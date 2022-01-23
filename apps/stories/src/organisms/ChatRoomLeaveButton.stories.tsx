import { ChatRoomLeaveButton, ChatRoomLeaveButtonProps } from "@makepurple/www";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/ChatRoomLeaveButton",
	component: ChatRoomLeaveButton
} as Meta;

const Template: Story<ChatRoomLeaveButtonProps> = (args) => {
	return <ChatRoomLeaveButton {...args}>Leave Chat</ChatRoomLeaveButton>;
};
Template.args = {
	chatId: "0"
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
