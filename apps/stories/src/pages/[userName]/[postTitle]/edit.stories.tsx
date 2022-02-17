import { SiteWideLayout } from "@makepurple/www";
import {
	GetNotificationCounts_mock,
	GetPostDraft_mock,
	GetPost_mock,
	GetSiteWideSideDrawer_mock,
	GetUserFriendRequestCount_mock,
	GetUserInfoSideBar_mock
} from "@makepurple/www/src/graphql/mocks";
import { PageProps } from "@makepurple/www/src/page-props/[userName]/[postTitle]/edit";
import { Page } from "@makepurple/www/src/pages/[userName]/[postTitle]/edit";
import type { Meta, Story } from "@storybook/react";
import React from "react";
import { getOperationName } from "urql";

export default {
	title: "pages/[userName]/[postTitle]/edit",
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
			postTitle: "not-a-real-blog-post-title",
			userName: "leedavidcs"
		}
	}
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
Standard.parameters = {
	...Template.parameters,
	urql: (op: any) => {
		switch (getOperationName(op.query)) {
			case "GetNotificationCounts":
				return { data: GetNotificationCounts_mock };
			case "GetPost":
				return { data: GetPost_mock };
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
