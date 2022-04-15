import { HomePageHero, HomePageHeroProps } from "@makepurple/www";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/HomePageHero",
	component: HomePageHero
} as Meta;

const Template: Story<HomePageHeroProps> = (args) => {
	return <HomePageHero {...args} />;
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
