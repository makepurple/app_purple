import { Toolbar, ToolbarProps } from "@makepurple/components";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "atoms/Toolbar",
	component: Toolbar
} as Meta;

const Template: Story<ToolbarProps> = (args) => {
	return <Toolbar {...args} />;
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
