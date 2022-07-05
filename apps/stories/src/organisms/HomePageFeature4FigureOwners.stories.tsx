import { HomePageFeature4FigureOwners, HomePageFeature4FigureOwnersProps } from "@makepurple/www";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/HomePageFeature4FigureOwners",
	component: HomePageFeature4FigureOwners
} as Meta;

const Template: Story<HomePageFeature4FigureOwnersProps> = (args) => {
	return <HomePageFeature4FigureOwners {...args} />;
};
Template.args = {};
Template.parameters = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
Standard.parameters = { ...Template.parameters };
