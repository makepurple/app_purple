import { LoadingSkillCard, LoadingSkillCardProps } from "@makepurple/www";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/LoadingSkillCard",
	component: LoadingSkillCard
} as Meta;

const Template: Story<LoadingSkillCardProps> = (args) => {
	return <LoadingSkillCard {...args} />;
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
