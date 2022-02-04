import { LoadingUserActivityCardSkill, LoadingUserActivityCardSkillProps } from "@makepurple/www";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/LoadingUserActivityCardSkill",
	component: LoadingUserActivityCardSkill
} as Meta;

const Template: Story<LoadingUserActivityCardSkillProps> = (args) => {
	return <LoadingUserActivityCardSkill {...args} />;
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
