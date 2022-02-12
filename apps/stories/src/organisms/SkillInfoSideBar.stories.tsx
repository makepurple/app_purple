import { SkillInfoSideBar, SkillInfoSideBarProps } from "@makepurple/www";
import { Skill_fragment_mock } from "@makepurple/www/src/graphql/mocks";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/SkillInfoSideBar",
	compoent: SkillInfoSideBar
} as Meta;

const Template: Story<SkillInfoSideBarProps> = (args) => {
	return <SkillInfoSideBar {...args} />;
};
Template.args = {
	skill: Skill_fragment_mock as any
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
