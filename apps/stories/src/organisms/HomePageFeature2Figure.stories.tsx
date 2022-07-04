import { HomePageFeature2Figure, HomePageFeature2FigureProps } from "@makepurple/www";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/HomePageFeature2Figure",
	component: HomePageFeature2Figure
} as Meta;

const Template: Story<HomePageFeature2FigureProps> = (args) => {
	return <HomePageFeature2Figure {...args} />;
};
Template.args = {};
Template.parameters = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
Standard.parameters = { ...Template.parameters };
