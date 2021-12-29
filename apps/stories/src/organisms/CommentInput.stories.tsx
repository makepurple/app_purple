import { CommentInput, CommentInputProps } from "@makepurple/www";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/CommentInput",
	component: CommentInput
} as Meta;

const Template: Story<CommentInputProps> = (args) => {
	return <CommentInput {...args} />;
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
