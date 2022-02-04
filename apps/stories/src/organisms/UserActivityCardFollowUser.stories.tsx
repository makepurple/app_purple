import { UserActivityCardFollowUser, UserActivityCardFollowUserProps } from "@makepurple/www";
import { UserActivityFollowUser_fragment_mock } from "@makepurple/www/src/graphql/mocks";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/UserActivityCardFollowUser",
	component: UserActivityCardFollowUser
} as Meta;

const Template: Story<UserActivityCardFollowUserProps> = (args: any) => {
	return (
		<UserActivityCardFollowUser {...args}>
			<p>This is some content</p>
		</UserActivityCardFollowUser>
	);
};
Template.args = {
	userActivity: UserActivityFollowUser_fragment_mock as any
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
