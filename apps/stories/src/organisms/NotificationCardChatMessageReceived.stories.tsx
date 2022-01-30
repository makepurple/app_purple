import {
	NotificationCardChatMessageReceived,
	NotificationCardChatMessageReceivedProps
} from "@makepurple/www";
import { NotificationChatMessageReceived_fragment_mock } from "@makepurple/www/src/graphql/mocks";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/NotificationCardChatMessageReceived",
	component: NotificationCardChatMessageReceived
} as Meta;

const Template: Story<NotificationCardChatMessageReceivedProps> = (args) => {
	return <NotificationCardChatMessageReceived {...args} />;
};
Template.args = {
	notification: NotificationChatMessageReceived_fragment_mock
};

export const Standard = Template.bind({});
Standard.args = {
	...Template.args,
	notification: {
		...NotificationChatMessageReceived_fragment_mock,
		opened: true
	}
};

export const Unopened = Template.bind({});
Unopened.args = {
	...Template.args,
	notification: {
		...NotificationChatMessageReceived_fragment_mock,
		opened: false
	}
};
