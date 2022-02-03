import { UserActivityCardHeader, UserActivityCardHeaderProps } from "@makepurple/www";
import { UserActivity_fragment_mock } from "@makepurple/www/src/graphql/mocks";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/UserActivityCardHeader",
	component: UserActivityCardHeader
} as Meta;

const Template: Story<UserActivityCardHeaderProps> = (args) => {
	return (
		<UserActivityCardHeader {...args}>
			<p>This is some content</p>
		</UserActivityCardHeader>
	);
};
Template.args = {
	children: "joins MakePurple",
	userActivity: {
		__typename: "UserActivityCommentPost",
		...UserActivity_fragment_mock
	}
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
