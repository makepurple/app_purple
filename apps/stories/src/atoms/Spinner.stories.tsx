import { Spinner, SpinnerProps } from "@makepurple/components";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "atoms/Spinner",
	component: Spinner
} as Meta;

const Template: Story<SpinnerProps> = (args) => {
	return <Spinner {...args} />;
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
