import { UploadPostImage_mock } from "@/client/graphql/mocks";
import { PostImageInput } from "@/client/organisms";
import { PromiseUtils } from "@/utils";
import type { Meta, Story } from "@storybook/react";
import ms from "ms";
import React from "react";
import { getOperationName } from "urql";
import { PostImageInputProps } from ".";

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
	urql: async (op) => {
		switch (getOperationName(op.query)) {
			case "UploadPostImage":
				await PromiseUtils.wait(ms("5s"));

				return { data: UploadPostImage_mock };
			default:
				return {};
		}
	}
};
