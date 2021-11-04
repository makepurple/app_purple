import { FormButton } from "@/client/atoms";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "atoms/FormButton",
	component: FormButton
} as Meta;

const Template = (args) => {
	return <FormButton {...args} />;
};
Template.args = {
	children: "Click Me!",
	disabled: false
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
