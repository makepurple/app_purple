import { SiteWideLayout } from "@makepurple/www";
import {
	GetActivityFeed_mock,
	GetFollowableSkills_mock,
	GetNotificationCounts_mock,
	GetPostDraft_mock,
	GetSiteWideSideDrawer_mock
} from "@makepurple/www/src/graphql/mocks";
import { PageProps } from "@makepurple/www/src/page-props/feed";
import { Page } from "@makepurple/www/src/pages/feed";
import { action } from "@storybook/addon-actions";
import type { Meta, Story } from "@storybook/react";
import React from "react";
import { getOperationName, Operation } from "urql";

export default {
	title: "pages/feed",
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
			case "GetActivityFeed":
				return { data: GetActivityFeed_mock };
			case "GetFollowableSkills":
				return { data: GetFollowableSkills_mock };
			case "GetNotificationCounts":
				return { data: GetNotificationCounts_mock };
			case "GetPostDraft":
				return { data: GetPostDraft_mock };
			case "GetSiteWideSideDrawer":
				return { data: GetSiteWideSideDrawer_mock };
			default:
				return {};
		}
	}
};

export const NoActivities = Template.bind({});
NoActivities.args = { ...Template.args };
NoActivities.parameters = {
	...Template.parameters,
	urql: (op: Operation) => {
		const operationName = getOperationName(op.query);

		operationName && action(operationName)(op.variables);

		switch (operationName) {
			case "GetActivityFeed":
				return {
					data: {
						...GetActivityFeed_mock,
						activityFeed: {
							...GetActivityFeed_mock.activityFeed,
							pageInfo: {
								__typename: "PageInfo",
								endCursor: null,
								hasNextPage: false,
								hasPreviousPage: false,
								startCursor: null
							},
							edges: [],
							nodes: []
						}
					}
				};
			case "GetFollowableSkills":
				return { data: GetFollowableSkills_mock };
			case "GetNotificationCounts":
				return { data: GetNotificationCounts_mock };
			case "GetPostDraft":
				return { data: GetPostDraft_mock };
			case "GetSiteWideSideDrawer":
				return { data: GetSiteWideSideDrawer_mock };
			default:
				return {};
		}
	}
};
