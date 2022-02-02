import { PendingFriendsButton, PendingFriendsButtonProps } from "@makepurple/www";
import { GetNotificationCounts_mock } from "@makepurple/www/src/graphql/mocks";
import { action } from "@storybook/addon-actions";
import type { Meta, Story } from "@storybook/react";
import React from "react";
import { getOperationName, Operation } from "urql";

export default {
	title: "organisms/PendingFriendsButton",
	component: PendingFriendsButton
} as Meta;

const Template: Story<PendingFriendsButtonProps> = (args) => {
	return <PendingFriendsButton {...args} />;
};
Template.args = {};
Template.parameters = {
	urql: (op: Operation) => {
		const operationName = getOperationName(op.query);

		operationName && action(operationName)(op.variables);

		switch (operationName) {
			case "GetNotificationCounts":
				return { data: GetNotificationCounts_mock };
			default:
				return {};
		}
	}
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
Standard.parameters = {
	...Template.parameters
};

export const WithNotifications = Template.bind({});
WithNotifications.args = { ...Template.args };
WithNotifications.parameters = {
	...Template.parameters,
	urql: (op: Operation) => {
		const operationName = getOperationName(op.query);

		operationName && action(operationName)(op.variables);

		switch (operationName) {
			case "GetNotificationCounts":
				return {
					data: {
						...GetNotificationCounts_mock,
						viewer: {
							...GetNotificationCounts_mock.viewer,
							friendRequestsReceived: {
								...GetNotificationCounts_mock.viewer?.friendRequestsReceived,
								totalCount: 5
							}
						}
					}
				};
			default:
				return {};
		}
	}
};
