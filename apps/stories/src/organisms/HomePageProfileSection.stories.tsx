import { HomePageProfileSection, HomePageProfileSectionProps } from "@makepurple/www";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/HomePageProfileSection",
	component: HomePageProfileSection
} as Meta;

const Template: Story<HomePageProfileSectionProps> = (args) => {
	return <HomePageProfileSection {...args} />;
};
Template.args = {};
Template.parameters = {
	layout: "fullscreen"
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
Standard.parameters = { ...Template.parameters };
