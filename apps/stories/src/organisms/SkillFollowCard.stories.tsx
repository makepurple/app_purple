import { SkillFollowCard, SkillFollowCardProps } from "@makepurple/www";
import { Skill_fragment_mock } from "@makepurple/www/src/graphql/mocks";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/SkillFollowCard",
	compoent: SkillFollowCard
} as Meta;

const Template: Story<SkillFollowCardProps> = (args) => {
	return <SkillFollowCard {...args} />;
};
Template.args = {
	skill: Skill_fragment_mock as any
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
