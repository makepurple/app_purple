import {
	NotificationCardCodeExampleCommented,
	NotificationCardCodeExampleCommentedProps
} from "@makepurple/www";
import { NotificationCodeExampleCommented_fragment_mock } from "@makepurple/www/src/graphql/mocks";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/NotificationCardCodeExampleCommented",
	component: NotificationCardCodeExampleCommented
} as Meta;

const Template: Story<NotificationCardCodeExampleCommentedProps> = (args) => {
	return <NotificationCardCodeExampleCommented {...args} />;
};
Template.args = {
	notification: NotificationCodeExampleCommented_fragment_mock as any
};

export const Standard = Template.bind({});
Standard.args = {
	...Template.args,
	notification: {
		...NotificationCodeExampleCommented_fragment_mock,
		opened: true
	}
};

export const Unopened = Template.bind({});
Unopened.args = {
	...Template.args,
	notification: {
		...NotificationCodeExampleCommented_fragment_mock,
		opened: false
	}
};
