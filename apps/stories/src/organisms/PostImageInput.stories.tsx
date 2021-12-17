import { PromiseUtils } from "@makepurple/utils";
import { PostImageInput, PostImageInputProps } from "@makepurple/www";
import { UploadPostImage_mock } from "@makepurple/www/src/graphql/mocks";
import type { Meta, Story } from "@storybook/react";
import ms from "ms";
import React from "react";
import { getOperationName } from "urql";

export default {
	title: "organisms/PostImageInput",
	component: PostImageInput
} as Meta;

const Template: Story<PostImageInputProps> = (args) => {
	return <PostImageInput {...args} />;
};
Template.args = {
	postId: 0
};
Template.parameters = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
Standard.parameters = {
	...Template.parameters,
	urql: async (op: any) => {
		switch (getOperationName(op.query)) {
			case "UploadPostImage":
				await PromiseUtils.wait(ms("1s"));

				return { data: UploadPostImage_mock };
			default:
				return {};
		}
	}
};
