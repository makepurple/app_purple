import { LoadingRepositoryCard, LoadingRepositoryCardProps } from "@makepurple/www";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/LoadingRepositoryCard",
	component: LoadingRepositoryCard
} as Meta;

const Template: Story<LoadingRepositoryCardProps> = (args) => {
	return <LoadingRepositoryCard {...args} />;
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
