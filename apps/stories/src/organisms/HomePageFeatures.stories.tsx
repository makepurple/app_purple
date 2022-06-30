import { HomePageFeatures, HomePageFeaturesProps } from "@makepurple/www";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/HomePageFeatures",
	component: HomePageFeatures
} as Meta;

const Template: Story<HomePageFeaturesProps> = (args) => {
	return <HomePageFeatures {...args} />;
};
Template.args = {};
Template.parameters = {
	layout: "fullscreen"
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
Standard.parameters = { ...Template.parameters };
