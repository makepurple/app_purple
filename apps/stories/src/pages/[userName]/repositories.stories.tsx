import { PromiseUtils } from "@makepurple/utils";
import { SiteWideLayout } from "@makepurple/www";
import {
	GetPostDraft_mock,
	GetRepositories_mock,
	GetUserInfoSideBar_mock
} from "@makepurple/www/src/graphql/mocks";
import { Page } from "@makepurple/www/src/pages/[userName]/repositories";
import type { Meta, Story } from "@storybook/react";
import ms from "ms";
import React from "react";
import { getOperationName } from "urql";

export default {
	title: "pages/[userName]/repositories",
	component: Page,
	decorators: [
		(Story) => (
			<SiteWideLayout>
				<Story />
			</SiteWideLayout>
		)
	]
} as Meta;

const Template: Story = (args) => {
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
	urql: (op: any) => {
		switch (getOperationName(op.query)) {
			case "GetPostDraft":
				return { data: GetPostDraft_mock };
			case "GetRepositories":
				return { data: GetRepositories_mock };
			case "GetUserInfoSideBar":
				return { data: GetUserInfoSideBar_mock };
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
			case "GetPostDraft":
				return { data: GetPostDraft_mock };
			case "GetRepositories":
				await PromiseUtils.wait(ms("5s"));

				return { data: GetRepositories_mock };
			case "GetUserInfoSideBar":
				return { data: GetUserInfoSideBar_mock };
			default:
				return {};
		}
	}
};

export const NoResults = Template.bind({});
NoResults.args = { ...Template.args };
NoResults.parameters = {
	...Template.parameters,
	urql: (op: any) => {
		switch (getOperationName(op.query)) {
			case "GetPostDraft":
				return { data: GetPostDraft_mock };
			case "GetRepositories":
				return {
					data: {
						__typename: "Query",
						repositories: {
							__typename: "RepositoryConnection",
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
			case "GetUserInfoSideBar":
				return { data: GetUserInfoSideBar_mock };
			default:
				return {};
		}
	}
};
