import { UserActivityCardCommentPost, UserActivityCardCommentPostProps } from "@makepurple/www";
import { UserActivityCommentPost_fragment_mock } from "@makepurple/www/src/graphql/mocks";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/UserActivityCardCommentPost",
	component: UserActivityCardCommentPost
} as Meta;

const Template: Story<UserActivityCardCommentPostProps> = (args: any) => {
	return (
		<UserActivityCardCommentPost {...args}>
			<p>This is some content</p>
		</UserActivityCardCommentPost>
	);
};
Template.args = {
	userActivity: UserActivityCommentPost_fragment_mock
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
