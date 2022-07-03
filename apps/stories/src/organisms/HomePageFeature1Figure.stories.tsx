import { HomePageFeature1Figure, HomePageFeature1FigureProps } from "@makepurple/www";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/HomePageFeature1Figure",
	component: HomePageFeature1Figure
} as Meta;

const Template: Story<HomePageFeature1FigureProps> = (args) => {
	return <HomePageFeature1Figure {...args} />;
};
Template.args = {};
Template.parameters = {
	layout: "fullscreen"
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
Standard.parameters = { ...Template.parameters };
