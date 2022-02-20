import { Logo, LogoProps } from "@makepurple/components";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "atoms/Logo",
	component: Logo
} as Meta;

const Template: Story<LogoProps> = (args) => {
	return <Logo {...args} />;
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
