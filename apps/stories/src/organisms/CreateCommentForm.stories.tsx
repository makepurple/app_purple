import { CreateCommentForm, CreateCommentFormProps } from "@makepurple/www";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/CreateCommentForm",
	component: CreateCommentForm
} as Meta;

const Template: Story<CreateCommentFormProps> = (args) => {
	return <CreateCommentForm {...args} />;
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
