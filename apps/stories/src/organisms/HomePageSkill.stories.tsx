import { HomePageSkill, HomePageSkillProps } from "@makepurple/www";
import { GitHubRepository_fragment_mock } from "@makepurple/www/src/graphql/mocks";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/HomePageSkill",
	component: HomePageSkill
} as Meta;

const Template: Story<HomePageSkillProps> = (args) => {
	return <HomePageSkill {...args} />;
};
Template.args = {
	repository: GitHubRepository_fragment_mock
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
