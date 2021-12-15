import { HiddenInput } from "@makepurple/components";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "atoms/HiddenInput",
	component: HiddenInput
} as Meta;

const Template: Story = (args) => {
	return <HiddenInput {...args} />;
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
