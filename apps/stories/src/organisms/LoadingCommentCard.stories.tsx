import { LoadingCommentCard, LoadingCommentCardProps } from "@makepurple/www";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/LoadingCommentCard",
	component: LoadingCommentCard
} as Meta;

const Template: Story<LoadingCommentCardProps> = (args) => {
	return <LoadingCommentCard {...args} />;
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
