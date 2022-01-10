import { LoadingUserFollowCard, LoadingUserFollowCardProps } from "@makepurple/www";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/LoadingUserFollowCard",
	component: LoadingUserFollowCard
} as Meta;

const Template: Story<LoadingUserFollowCardProps> = (args) => {
	return <LoadingUserFollowCard {...args} />;
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
