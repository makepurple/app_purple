import { LoginButton, LoginButtonProps } from "@makepurple/www";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/LoginButton",
	component: LoginButton
} as Meta;

const Template: Story<LoginButtonProps> = (args) => {
	return <LoginButton {...args} />;
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
