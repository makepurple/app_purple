import { LoadingChatRoomMessage, LoadingChatRoomMessageProps } from "@makepurple/www";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/LoadingChatRoomMessage",
	component: LoadingChatRoomMessage
} as Meta;

const Template: Story<LoadingChatRoomMessageProps> = (args) => {
	return <LoadingChatRoomMessage {...args} />;
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
