import { SiteWideLayout } from "@makepurple/www";
import {
	GetNotificationCounts_mock,
	GetNotifications_mock,
	GetPostDraft_mock,
	GetSiteWideSideDrawer_mock,
	GetUserFriendRequestCount_mock
} from "@makepurple/www/src/graphql/mocks";
import { PageProps } from "@makepurple/www/src/page-props/notifications";
import { Page } from "@makepurple/www/src/pages/notifications";
import { action } from "@storybook/addon-actions";
import type { Meta, Story } from "@storybook/react";
import React from "react";
import { getOperationName, Operation } from "urql";

export default {
	title: "pages/notifications",
	component: Page,
	decorators: [
		(Story) => (
			<SiteWideLayout>
				<Story />
			</SiteWideLayout>
		)
	]
} as Meta;

const Template: Story<PageProps> = (args) => {
	return <Page {...args} />;
};
Template.args = {};
Template.parameters = {
	layout: "fullscreen"
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
Standard.parameters = {
	...Template.parameters,
	urql: (op: Operation) => {
		const operationName = getOperationName(op.query);

		operationName && action(operationName)(op.variables);

		switch (operationName) {
			case "GetNotificationCounts":
				return { data: GetNotificationCounts_mock };
			case "GetNotifications":
				return { data: GetNotifications_mock };
			case "GetPostDraft":
				return { data: GetPostDraft_mock };
			case "GetSiteWideSideDrawer":
				return { data: GetSiteWideSideDrawer_mock };
			case "GetUserFriendRequestCount":
				return { data: GetUserFriendRequestCount_mock };
			default:
				return {};
		}
	}
};
