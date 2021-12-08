import {
	CreatePost_mock,
	GetPostDraft_mock,
	GetUserInfoSideBar_mock
} from "@/client/graphql/mocks";
import { SiteWideLayout } from "@/client/organisms";
import { PageProps } from "@/client/page-props/[userName]/experiences";
import Page from "@/pages/[userName]/experiences";
import { PromiseUtils } from "@/utils";
import type { Meta, Story } from "@storybook/react";
import ms from "ms";
import React from "react";
import { getOperationName } from "urql";

export default {
	title: "pages/[username]/experiences",
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
	urql: async (op) => {
		switch (getOperationName(op.query)) {
			case "CreatePost":
				await PromiseUtils.wait(ms("1s"));

				return { data: CreatePost_mock };
			case "GetPostDraft":
				return { data: GetPostDraft_mock };
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
	urql: async (op) => {
		switch (getOperationName(op.query)) {
			case "CreatePost":
				await PromiseUtils.wait(ms("1s"));

				return { data: CreatePost_mock };
			case "GetPostDraft":
				return { data: GetPostDraft_mock };
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
	urql: async (op) => {
		switch (getOperationName(op.query)) {
			case "CreatePost":
				await PromiseUtils.wait(ms("1s"));

				return { data: CreatePost_mock };
			case "GetPostDraft":
				return {
					data: {
						__typename: "Query",
						postDraft: null
					}
				};
			case "GetUserInfoSideBar":
				return { data: GetUserInfoSideBar_mock };
			default:
				return {};
		}
	}
};
