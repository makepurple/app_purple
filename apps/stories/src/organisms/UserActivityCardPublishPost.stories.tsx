import { UserActivityCardPublishPost, UserActivityCardPublishPostProps } from "@makepurple/www";
import { UserActivityPublishPost_fragment_mock } from "@makepurple/www/src/graphql/mocks";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/UserActivityCardPublishPost",
	component: UserActivityCardPublishPost
} as Meta;

const Template: Story<UserActivityCardPublishPostProps> = (args: any) => {
	return (
		<UserActivityCardPublishPost {...args}>
			<p>This is some content</p>
		</UserActivityCardPublishPost>
	);
};
Template.args = {
	userActivity: UserActivityPublishPost_fragment_mock
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
