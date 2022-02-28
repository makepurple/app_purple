import { SiteWideLayout } from "@makepurple/www";
import {
	GetCodeExampleComments_mock,
	GetCodeExample_mock,
	GetNotificationCounts_mock,
	GetPostDraft_mock,
	GetSiteWideSideDrawer_mock,
	GetUserFriendRequestCount_mock,
	GetUserInfoSideBar_mock
} from "@makepurple/www/src/graphql/mocks";
import { PageProps } from "@makepurple/www/src/page-props/[userName]/snippets/[codeExampleTitle]";
import Page from "@makepurple/www/src/pages/[userName]/snippets/[codeExampleTitle]";
import type { Meta, Story } from "@storybook/react";
import React from "react";
import { getOperationName, Operation } from "urql";

export default {
	title: "pages/[userName]/snippets/[codeExampleTitle]",
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
	layout: "fullscreen",
	nextRouter: {
		query: {
			userName: "leedavidcs",
			codeExampleTitle: "useeffectonce"
		}
	}
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
Standard.parameters = {
	...Template.parameters,
	urql: (op: Operation) => {
		switch (getOperationName(op.query)) {
			case "GetCodeExample":
				return { data: GetCodeExample_mock };
			case "GetCodeExampleComments":
				return { data: GetCodeExampleComments_mock };
			case "GetNotificationCounts":
				return { data: GetNotificationCounts_mock };
			case "GetPostDraft":
				return { data: GetPostDraft_mock };
			case "GetSiteWideSideDrawer":
				return { data: GetSiteWideSideDrawer_mock };
			case "GetUserFriendRequestCount":
				return { data: GetUserFriendRequestCount_mock };
			case "GetUserInfoSideBar":
				return { data: GetUserInfoSideBar_mock };
			default:
				return {};
		}
	}
};
