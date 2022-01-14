import { SkillCard, SkillCardProps } from "@makepurple/www";
import { Skill_fragment_mock } from "@makepurple/www/src/graphql/mocks";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/SkillCard",
	compoent: SkillCard
} as Meta;

const Template: Story<SkillCardProps> = (args) => {
	return <SkillCard {...args} />;
};
Template.args = {
	skill: Skill_fragment_mock as any
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
