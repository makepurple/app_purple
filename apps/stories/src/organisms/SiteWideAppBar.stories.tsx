import { SiteWideAppBar, SiteWideAppBarProps } from "@makepurple/www";
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
