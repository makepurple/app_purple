import { SkillPageTabs, SkillPageTabsProps } from "@makepurple/www";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/SkillPageTabs",
	compoent: SkillPageTabs
} as Meta;

const Template: Story<SkillPageTabsProps> = (args) => {
	return <SkillPageTabs {...args} />;
};
Template.args = {
	skillName: "react",
	skillOwner: "facebook"
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
