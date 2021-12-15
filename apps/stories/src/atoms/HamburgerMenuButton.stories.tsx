import { HamburgerMenuButton, HamburgerMenuButtonProps } from "@makepurple/components";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "atoms/HamburgerMenuButton",
	component: HamburgerMenuButton
} as Meta;

const Template: Story<HamburgerMenuButtonProps> = (args) => {
	return <HamburgerMenuButton {...args} />;
};
Template.args = {
	open: false
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
