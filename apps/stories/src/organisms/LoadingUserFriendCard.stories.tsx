import { LoadingUserFriendCard, LoadingUserFriendCardProps } from "@makepurple/www";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/LoadingUserFriendCard",
	component: LoadingUserFriendCard
} as Meta;

const Template: Story<LoadingUserFriendCardProps> = (args) => {
	return <LoadingUserFriendCard {...args} />;
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
