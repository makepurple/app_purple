import { TextArea, TextAreaProps } from "@/client/atoms";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "atoms/TextArea",
	component: TextArea
} as Meta;

const Template: Story<TextAreaProps> = (args) => {
	return <TextArea {...args} />;
};
Template.args = {
	disabled: false,
	error: false,
	placeholder: "Type some text here..."
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
