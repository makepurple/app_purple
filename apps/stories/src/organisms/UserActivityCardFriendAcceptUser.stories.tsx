import {
	UserActivityCardFriendAcceptUser,
	UserActivityCardFriendAcceptUserProps
} from "@makepurple/www";
import { UserActivityFriendAcceptUser_fragment_mock } from "@makepurple/www/src/graphql/mocks";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/UserActivityCardFriendAcceptUser",
	component: UserActivityCardFriendAcceptUser
} as Meta;

const Template: Story<UserActivityCardFriendAcceptUserProps> = (args: any) => {
	return (
		<UserActivityCardFriendAcceptUser {...args}>
			<p>This is some content</p>
		</UserActivityCardFriendAcceptUser>
	);
};
Template.args = {
	userActivity: UserActivityFriendAcceptUser_fragment_mock
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
