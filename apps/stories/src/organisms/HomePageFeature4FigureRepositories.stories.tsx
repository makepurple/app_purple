import {
	HomePageFeature4FigureRepositories,
	HomePageFeature4FigureRepositoriesProps
} from "@makepurple/www";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/HomePageFeature4FigureRepositories",
	component: HomePageFeature4FigureRepositories
} as Meta;

const Template: Story<HomePageFeature4FigureRepositoriesProps> = (args) => {
	return <HomePageFeature4FigureRepositories {...args} />;
};
Template.args = {};
Template.parameters = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
Standard.parameters = { ...Template.parameters };
