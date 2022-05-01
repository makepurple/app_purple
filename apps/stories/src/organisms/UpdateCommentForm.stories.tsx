import { UpdateCommentForm, UpdateCommentFormProps } from "@makepurple/www";
import { Comment_fragment_mock } from "@makepurple/www/src/graphql/mocks";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/UpdateCommentForm",
	component: UpdateCommentForm
} as Meta;

const Template: Story<UpdateCommentFormProps> = (args) => {
	return <UpdateCommentForm {...args} />;
};
Template.args = {
	comment: Comment_fragment_mock
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };

export const Deleted = Template.bind({});
Deleted.args = {
	comment: {
		...Comment_fragment_mock,
		authorId: null,
		author: null,
		content: null
	}
};
