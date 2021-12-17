import { LoadingPostCard } from "@makepurple/www";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/LoadingPostCard",
	component: LoadingPostCard
} as Meta;

const Template: Story = (args) => {
	return <LoadingPostCard {...args} />;
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
