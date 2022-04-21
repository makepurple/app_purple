import { HomePageJoinCommunitySection, HomePageJoinCommunitySectionProps } from "@makepurple/www";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/HomePageJoinCommunitySection",
	component: HomePageJoinCommunitySection
} as Meta;

const Template: Story<HomePageJoinCommunitySectionProps> = (args) => {
	return <HomePageJoinCommunitySection {...args} />;
};
Template.args = {};
Template.parameters = {
	layout: "fullscreen"
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
Standard.parameters = { ...Template.parameters };
