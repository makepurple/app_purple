import { VisuallyHidden, VisuallyHiddenProps } from "@makepurple/components";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "atoms/VisuallyHidden",
	component: VisuallyHidden
} as Meta;

const Template: Story<VisuallyHiddenProps> = (args) => {
	return <VisuallyHidden {...args}>This should be hidden</VisuallyHidden>;
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
