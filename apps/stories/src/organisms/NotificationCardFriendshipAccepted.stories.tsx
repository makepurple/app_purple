import {
	NotificationCardFriendshipAccepted,
	NotificationCardFriendshipAcceptedProps
} from "@makepurple/www";
import { NotificationFriendshipAccepted_fragment_mock } from "@makepurple/www/src/graphql/mocks";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/NotificationCardFriendshipAccepted",
	component: NotificationCardFriendshipAccepted
} as Meta;

const Template: Story<NotificationCardFriendshipAcceptedProps> = (args) => {
	return <NotificationCardFriendshipAccepted {...args} />;
};
Template.args = {
	notification: NotificationFriendshipAccepted_fragment_mock
};

export const Standard = Template.bind({});
Standard.args = {
	...Template.args,
	notification: {
		...NotificationFriendshipAccepted_fragment_mock,
		opened: true
	}
};

export const Unopened = Template.bind({});
Unopened.args = {
	...Template.args,
	notification: {
		...NotificationFriendshipAccepted_fragment_mock,
		opened: false
	}
};
