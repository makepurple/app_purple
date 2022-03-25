import { UserFriendRequestCard, UserFriendRequestCardProps } from "@makepurple/www";
import { User_fragment_mock } from "@makepurple/www/src/graphql/mocks";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/UserFriendRequestCard",
	compoent: UserFriendRequestCard
} as Meta;

const Template: Story<UserFriendRequestCardProps> = (args) => {
	return <UserFriendRequestCard {...args} />;
};
Template.args = {
	user: User_fragment_mock
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };

export const IsFriended = Template.bind({});
IsFriended.args = {
	...Template.args,
	user: {
		...User_fragment_mock,
		viewerIsFriend: true
	}
};
