import { SiteWideLayout, SiteWideLayoutProps } from "@makepurple/www";
import {
	GetNotificationCounts_mock,
	GetPostDraft_mock,
	GetSiteWideSideDrawer_mock,
	GetUserFriendRequestCount_mock
} from "@makepurple/www/src/graphql/mocks";
import { action } from "@storybook/addon-actions";
import type { Meta, Story } from "@storybook/react";
import React from "react";
import { getOperationName, Operation } from "urql";

export default {
	title: "organisms/SiteWideLayout",
	component: SiteWideLayout
} as Meta;

const Template: Story<SiteWideLayoutProps> = (args) => {
	return <SiteWideLayout {...args} />;
};
Template.args = {};
Template.parameters = {
	layout: "fullscreen",
	urql: (op: Operation) => {
		const operationName = getOperationName(op.query);

		operationName && action(operationName)(op.variables);

		switch (operationName) {
			case "GetPostDraft":
				return { data: GetPostDraft_mock };
			case "GetNotificationCounts":
				return { data: GetNotificationCounts_mock };
			case "GetSiteWideSideDrawer":
				return { data: GetSiteWideSideDrawer_mock };
			case "GetUserFriendRequestCount":
				return { data: GetUserFriendRequestCount_mock };
			default:
				return {};
		}
	}
};

export const Standard: any = Template.bind({});
Standard.args = { ...Template.args };
Standard.parameters = { ...Template.parameters };
