import { AppBar, AppBarProps } from "@makepurple/components";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "atoms/AppBar",
	component: AppBar
} as Meta;

const Template: Story<AppBarProps> = (args) => <AppBar {...args} />;
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
