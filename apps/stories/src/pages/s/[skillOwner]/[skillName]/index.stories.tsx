import { PromiseUtils } from "@makepurple/utils";
import { SiteWideLayout } from "@makepurple/www";
import {
	GetNotificationCounts_mock,
	GetPostDraft_mock,
	GetPosts_mock,
	GetSiteWideSideDrawer_mock,
	GetSkillInfoSideBar_mock,
	GetUserFriendRequestCount_mock
} from "@makepurple/www/src/graphql/mocks";
import { PageProps } from "@makepurple/www/src/page-props/s/[skillOwner]/[skillName]";
import { Page } from "@makepurple/www/src/pages/s/[skillOwner]/[skillName]";
import { action } from "@storybook/addon-actions";
import type { Meta, Story } from "@storybook/react";
import ms from "ms";
import React from "react";
import { getOperationName, Operation } from "urql";

export default {
	title: "pages/s/[skillOwner]/[skillName]",
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
			skillName: "react",
			skillOwner: "facebook"
		}
	}
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
			case "GetPostDraft":
				return { data: GetPostDraft_mock };
			case "GetPosts":
				return { data: GetPosts_mock };
			case "GetSiteWideSideDrawer":
				return { data: GetSiteWideSideDrawer_mock };
			case "GetSkillInfoSideBar":
				return { data: GetSkillInfoSideBar_mock };
			case "GetUserFriendRequestCount":
				return { data: GetUserFriendRequestCount_mock };
			default:
				return {};
		}
	}
};

export const Loading = Template.bind({});
Loading.args = { ...Template.args };
Loading.parameters = {
	...Template.parameters,
	urql: async (op: Operation) => {
		const operationName = getOperationName(op.query);

		operationName && action(operationName)(op.variables);

		switch (operationName) {
			case "GetNotificationCounts":
				return { data: GetNotificationCounts_mock };
			case "GetPostDraft":
				return { data: GetPostDraft_mock };
			case "GetPosts":
				await PromiseUtils.wait(ms("5s"));

				return { data: GetPosts_mock };
			case "GetSiteWideSideDrawer":
				return { data: GetSiteWideSideDrawer_mock };
			case "GetSkillInfoSideBar":
				return { data: GetSkillInfoSideBar_mock };
			case "GetUserFriendRequestCount":
				return { data: GetUserFriendRequestCount_mock };
			default:
				return {};
		}
	}
};

export const NoResults = Template.bind({});
NoResults.args = { ...Template.args };
NoResults.parameters = {
	...Template.parameters,
	urql: (op: Operation) => {
		const operationName = getOperationName(op.query);

		operationName && action(operationName)(op.variables);

		switch (operationName) {
			case "GetNotificationCounts":
				return { data: GetNotificationCounts_mock };
			case "GetPostDraft":
				return { data: GetPostDraft_mock };
			case "GetPosts":
				return {
					data: {
						__typename: "Query",
						posts: {
							__typename: "PostConnection",
							edges: [],
							nodes: [],
							pageInfo: {
								__typename: "PageInfo",
								endCursor: null,
								hasNextPage: false,
								hasPreviousPage: false,
								startCursor: null
							}
						}
					}
				};
			case "GetSiteWideSideDrawer":
				return { data: GetSiteWideSideDrawer_mock };
			case "GetSkillInfoSideBar":
				return { data: GetSkillInfoSideBar_mock };
			case "GetUserFriendRequestCount":
				return { data: GetUserFriendRequestCount_mock };
			default:
				return {};
		}
	}
};
