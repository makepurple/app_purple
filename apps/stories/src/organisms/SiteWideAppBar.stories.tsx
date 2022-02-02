import { SiteWideAppBar, SiteWideAppBarProps } from "@makepurple/www";
import { GetMyUser_mock, GetNotificationCounts_mock } from "@makepurple/www/src/graphql/mocks";
import { action } from "@storybook/addon-actions";
import type { Meta, Story } from "@storybook/react";
import React from "react";
import { getOperationName, Operation } from "urql";

export default {
	title: "organisms/SiteWideAppBar",
	component: SiteWideAppBar
} as Meta;

const Template: Story<SiteWideAppBarProps> = (args) => (
	<>
		<SiteWideAppBar {...args} />
		<div style={{ height: "200vh" }} />
	</>
);
Template.args = {};
Template.parameters = {
	layout: "fullscreen",
	urql: (op: Operation) => {
		const operationName = getOperationName(op.query);

		operationName && action(operationName)(op.variables);

		switch (operationName) {
			case "GetMyUser":
				return { data: GetMyUser_mock };
			case "GetNotificationCounts":
				return { data: GetNotificationCounts_mock };
			default:
				return {};
		}
	}
};

export const Standard: any = Template.bind({});
Standard.args = { ...Template.args };
Standard.parameters = {
	...Template.parameters,
	urql: (op: Operation) => {
		const operationName = getOperationName(op.query);

		operationName && action(operationName)(op.variables);

		switch (operationName) {
			case "GetMyUser":
				return {
					data: {
						viewer: null
					}
				};
			case "GetNotificationCounts":
				return { data: GetNotificationCounts_mock };
			default:
				return {};
		}
	}
};

export const LoggedIn: any = Template.bind({});
LoggedIn.args = { ...Template.args };
LoggedIn.parameters = {
	...Template.parameters,
	urql: (op: Operation) => {
		const operationName = getOperationName(op.query);

		operationName && action(operationName)(op.variables);

		switch (operationName) {
			case "GetMyUser":
				return { data: GetMyUser_mock };
			case "GetNotificationCounts":
				return { data: GetNotificationCounts_mock };
			default:
				return {};
		}
	}
};
