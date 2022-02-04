import { UserActivityCardUpvotePost, UserActivityCardUpvotePostProps } from "@makepurple/www";
import { UserActivityUpvotePost_fragment_mock } from "@makepurple/www/src/graphql/mocks";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/UserActivityCardUpvotePost",
	component: UserActivityCardUpvotePost
} as Meta;

const Template: Story<UserActivityCardUpvotePostProps> = (args: any) => {
	return (
		<UserActivityCardUpvotePost {...args}>
			<p>This is some content</p>
		</UserActivityCardUpvotePost>
	);
};
Template.args = {
	userActivity: UserActivityUpvotePost_fragment_mock
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
