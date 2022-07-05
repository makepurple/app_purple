import { HomePageFeature4Figure, HomePageFeature4FigureProps } from "@makepurple/www";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/HomePageFeature4Figure",
	component: HomePageFeature4Figure
} as Meta;

const Template: Story<HomePageFeature4FigureProps> = (args) => {
	return <HomePageFeature4Figure {...args} />;
};
Template.args = {};
Template.parameters = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
Standard.parameters = { ...Template.parameters };
