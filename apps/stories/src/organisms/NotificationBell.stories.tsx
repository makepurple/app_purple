import { NotificationBell, NotificationBellProps } from "@makepurple/www";
import { GetNotificationCount_mock } from "@makepurple/www/src/graphql/mocks";
import { action } from "@storybook/addon-actions";
import type { Meta, Story } from "@storybook/react";
import React from "react";
import { getOperationName, Operation } from "urql";

export default {
	title: "organisms/NotificationBell",
	component: NotificationBell
} as Meta;

const Template: Story<NotificationBellProps> = (args) => {
	return <NotificationBell {...args} />;
};
Template.args = {};
Template.parameters = {
	urql: (op: Operation) => {
		const operationName = getOperationName(op.query);

		operationName && action(operationName)(op.variables);

		switch (operationName) {
			case "GetNotificationCount":
				return { data: GetNotificationCount_mock };
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
			case "GetNotificationCount":
				return {
					data: {
						...GetNotificationCount_mock,
						viewer: {
							...GetNotificationCount_mock.viewer,
							notifications: {
								...GetNotificationCount_mock.viewer?.notifications,
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
