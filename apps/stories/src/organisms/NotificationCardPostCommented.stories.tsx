import { NotificationCardPostCommented, NotificationCardPostCommentedProps } from "@makepurple/www";
import { NotificationPostCommented_mock } from "@makepurple/www/src/graphql/mocks";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/NotificationCardPostCommented",
	component: NotificationCardPostCommented
} as Meta;

const Template: Story<NotificationCardPostCommentedProps> = (args) => {
	return <NotificationCardPostCommented {...args} />;
};
Template.args = {
	notification: NotificationPostCommented_mock
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };