import { LoginButtonProps, LogoutButton } from "@makepurple/www";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/LogoutButton",
	component: LogoutButton
} as Meta;

const Template: Story<LoginButtonProps> = (args) => {
	return <LogoutButton {...args} />;
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
