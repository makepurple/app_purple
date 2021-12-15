import { ExpandIcon, ExpandIconProps } from "@makepurple/components";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "atoms/ExpandIcon",
	component: ExpandIcon
} as Meta;

const Template: Story<ExpandIconProps> = (args) => {
	return <ExpandIcon {...args} />;
};
Template.args = {
	height: 24,
	width: 24,
	open: false
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
