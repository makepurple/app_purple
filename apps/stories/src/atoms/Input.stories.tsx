import { Input, InputProps } from "@makepurple/components";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "atoms/Input",
	component: Input
} as Meta;

const Template: Story<InputProps> = (args) => {
	return <Input {...args} />;
};
Template.args = {
	disabled: false,
	error: false,
	placeholder: "Type stuff here..."
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
