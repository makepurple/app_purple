import { NotificationCard, NotificationCardProps } from "@makepurple/www";
import {
	NotificationChatMessageReceived_fragment_mock,
	NotificationFriendshipAccepted_fragment_mock,
	NotificationPostCommented_fragment_mock
} from "@makepurple/www/src/graphql/mocks";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/NotificationCard",
	component: NotificationCard
} as Meta;

const Template: Story<NotificationCardProps> = (args) => {
	return <NotificationCard {...args} />;
};
Template.args = {
	notification: NotificationChatMessageReceived_fragment_mock
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };

export const ChatMessageReceived = Template.bind({});
ChatMessageReceived.args = {
	...Template.args,
	notification: NotificationChatMessageReceived_fragment_mock
};

export const FriendshipAccepted = Template.bind({});
FriendshipAccepted.args = {
	...Template.args,
	notification: NotificationFriendshipAccepted_fragment_mock
};

export const PostCommented = Template.bind({});
PostCommented.args = {
	...Template.args,
	notification: NotificationPostCommented_fragment_mock
};
