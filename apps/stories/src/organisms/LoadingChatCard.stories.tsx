import { LoadingChatCard, LoadingChatCardProps } from "@makepurple/www";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/LoadingChatCard",
	component: LoadingChatCard
} as Meta;

const Template: Story<LoadingChatCardProps> = (args) => {
	return <LoadingChatCard {...args} />;
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
