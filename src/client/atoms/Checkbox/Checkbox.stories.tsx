import { Checkbox, CheckboxProps } from "@/client/atoms";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "atoms/Checkbox",
	component: Checkbox
} as Meta;

const Template: Story<CheckboxProps> = (args) => {
	return <Checkbox {...args} />;
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
