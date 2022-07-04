import { HomePageFeature3Figure, HomePageFeature3FigureProps } from "@makepurple/www";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/HomePageFeature3Figure",
	component: HomePageFeature3Figure
} as Meta;

const Template: Story<HomePageFeature3FigureProps> = (args) => {
	return <HomePageFeature3Figure {...args} />;
};
Template.args = {};
Template.parameters = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
Standard.parameters = { ...Template.parameters };
