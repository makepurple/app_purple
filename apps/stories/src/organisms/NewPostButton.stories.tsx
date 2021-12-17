import { PromiseUtils } from "@makepurple/utils";
import { NewPostButton, NewPostButtonProps } from "@makepurple/www";
import { CreatePost_mock, GetPostDraft_mock } from "@makepurple/www/src/graphql/mocks";
import type { Meta, Story } from "@storybook/react";
import { getOperationName } from "@urql/core";
import ms from "ms";
import React from "react";

export default {
	title: "organisms/NewPostButton",
	component: NewPostButton
} as Meta;

const Template: Story<NewPostButtonProps> = (args) => {
	return <NewPostButton {...args} />;
};
Template.args = {
	children: "New Post",
	userName: "leedavidcs"
};
Template.parameters = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
Standard.parameters = {
	...Template.parameters,
	urql: async (op: any) => {
		switch (getOperationName(op.query)) {
			case "CreatePost":
				await PromiseUtils.wait(ms("1s"));

				return { data: CreatePost_mock };
			case "GetPostDraft":
				return { data: GetPostDraft_mock };
			default:
				return {};
		}
	}
};
