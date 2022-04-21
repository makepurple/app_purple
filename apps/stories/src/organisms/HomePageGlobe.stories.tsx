import { HomePageGlobe, HomePageGlobeProps } from "@makepurple/www";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/HomePageGlobe",
	component: HomePageGlobe
} as Meta;

const Template: Story<HomePageGlobeProps> = (args) => {
	return <HomePageGlobe {...args} style={{ height: 512, width: 512 }} />;
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
