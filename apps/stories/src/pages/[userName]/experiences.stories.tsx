import { PromiseUtils } from "@makepurple/utils";
import { SiteWideLayout } from "@makepurple/www";
import {
	CreateExperience_mock,
	CreatePost_mock,
	GetNotificationCounts_mock,
	GetPostDraft_mock,
	GetSiteWideSideDrawer_mock,
	GetUserExperiences_mock,
	GetUserInfoSideBar_mock,
	SuggestOrganizations_mock
} from "@makepurple/www/src/graphql/mocks";
import { PageProps } from "@makepurple/www/src/page-props/[userName]/experiences";
import Page from "@makepurple/www/src/pages/[userName]/experiences";
import type { Meta, Story } from "@storybook/react";
import ms from "ms";
import React from "react";
import { getOperationName } from "urql";

export default {
	title: "pages/[userName]/experiences",
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
			userName: "leedavidcs"
		}
	}
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
Standard.parameters = {
	...Template.parameters,
	urql: async (op: any) => {
		switch (getOperationName(op.query)) {
			case "CreateExperience":
				await PromiseUtils.wait(ms("1s"));

				return { data: CreateExperience_mock };
			case "CreatePost":
				await PromiseUtils.wait(ms("1s"));

				return { data: CreatePost_mock };
			case "GetUserExperiences":
				return { data: GetUserExperiences_mock };
			case "GetNotificationCounts":
				return { data: GetNotificationCounts_mock };
			case "GetPostDraft":
				return { data: GetPostDraft_mock };
			case "GetSiteWideSideDrawer":
				return { data: GetSiteWideSideDrawer_mock };
			case "GetUserInfoSideBar":
				return { data: GetUserInfoSideBar_mock };
			case "SuggestOrganizations":
				await PromiseUtils.wait(ms("1s"));

				return { data: SuggestOrganizations_mock };
			default:
				return {};
		}
	}
};

export const Loading = Template.bind({});
Loading.args = { ...Template.args };
Loading.parameters = {
	...Template.parameters,
	urql: async (op: any) => {
		switch (getOperationName(op.query)) {
			case "CreateExperience":
				await PromiseUtils.wait(ms("1s"));

				return { data: CreateExperience_mock };
			case "CreatePost":
				await PromiseUtils.wait(ms("1s"));

				return { data: CreatePost_mock };
			case "GetUserExperiences":
				await PromiseUtils.wait(ms("5s"));

				return { data: GetUserExperiences_mock };
			case "GetNotificationCounts":
				return { data: GetNotificationCounts_mock };
			case "GetPostDraft":
				return { data: GetPostDraft_mock };
			case "GetSiteWideSideDrawer":
				return { data: GetSiteWideSideDrawer_mock };
			case "GetUserInfoSideBar":
				return { data: GetUserInfoSideBar_mock };
			case "SuggestOrganizations":
				await PromiseUtils.wait(ms("1s"));

				return { data: SuggestOrganizations_mock };
			default:
				return {};
		}
	}
};

export const NoResults = Template.bind({});
NoResults.args = { ...Template.args };
NoResults.parameters = {
	...Template.parameters,
	urql: async (op: any) => {
		switch (getOperationName(op.query)) {
			case "CreateExperience":
				await PromiseUtils.wait(ms("1s"));

				return { data: CreateExperience_mock };
			case "CreatePost":
				await PromiseUtils.wait(ms("1s"));

				return { data: CreatePost_mock };
			case "GetUserExperiences":
				return {
					data: {
						__typename: "Query",
						experiences: {
							__typename: "ExperienceConnection",
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
			case "GetNotificationCounts":
				return { data: GetNotificationCounts_mock };
			case "GetPostDraft":
				return {
					data: {
						__typename: "Query",
						postDraft: null
					}
				};
			case "GetSiteWideSideDrawer":
				return { data: GetSiteWideSideDrawer_mock };
			case "GetUserInfoSideBar":
				return { data: GetUserInfoSideBar_mock };
			case "SuggestOrganizations":
				await PromiseUtils.wait(ms("1s"));

				return { data: SuggestOrganizations_mock };
			default:
				return {};
		}
	}
};
