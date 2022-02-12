import { SiteWideLayout } from "@makepurple/www";
import {
	GetNotificationCounts_mock,
	GetPostDraft_mock,
	GetSkillInfoSideBar_mock,
	PageInfo_fragment_mock,
	SuggestFriends_mock
} from "@makepurple/www/src/graphql/mocks";
import { PageProps } from "@makepurple/www/src/page-props/s/[skillOwner]/[skillName]/tab=explore";
import { Page } from "@makepurple/www/src/pages/s-tab/explore/[skillOwner]/[skillName]";
import { action } from "@storybook/addon-actions";
import type { Meta, Story } from "@storybook/react";
import React from "react";
import { getOperationName, Operation } from "urql";

export default {
	title: "pages/s/[skillOwner]/[skillName]?tab=explore",
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
			case "GetSkillInfoSideBar":
				return { data: GetSkillInfoSideBar_mock };
			case "SuggestFriends":
				return { data: SuggestFriends_mock };
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
			case "GetSkillInfoSideBar":
				return { data: GetSkillInfoSideBar_mock };
			case "SuggestFriends":
				return {
					data: {
						...SuggestFriends_mock,
						suggestFriends: {
							pageInfo: PageInfo_fragment_mock,
							edges: [],
							nodes: []
						}
					}
				};
			default:
				return {};
		}
	}
};
