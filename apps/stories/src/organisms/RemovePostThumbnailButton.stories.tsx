import { PromiseUtils } from "@makepurple/utils";
import { RemovePostThumbnailButton, RemovePostThumbnailButtonProps } from "@makepurple/www";
import { Post_fragment_mock, RemovePostThumbnail_mock } from "@makepurple/www/src/graphql/mocks";
import type { Meta, Story } from "@storybook/react";
import ms from "ms";
import React from "react";
import { getOperationName } from "urql";

export default {
	title: "organisms/RemovePostThumbnailButton",
	component: RemovePostThumbnailButton
} as Meta;

const Template: Story<RemovePostThumbnailButtonProps> = (args) => {
	return <RemovePostThumbnailButton {...args} />;
};
Template.args = {
	postId: Post_fragment_mock.id
};
Template.parameters = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
Standard.parameters = {
	...Template.parameters,
	urql: async (op: any) => {
		switch (getOperationName(op.query)) {
			case "RemovePostThumbnail":
				await PromiseUtils.wait(ms("1s"));

				return { data: RemovePostThumbnail_mock };
			default:
				return {};
		}
	}
};
