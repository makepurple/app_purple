import { GetPosts_mock, GetUserInfoSideBar_mock } from "@/client/graphql/mocks";
import { SiteWideLayout } from "@/client/organisms";
import Page from "@/pages/[username]";
import { PromiseUtils } from "@/utils";
import type { Meta, Story } from "@storybook/react";
import ms from "ms";
import React from "react";
import { getOperationName } from "urql";

export default {
	title: "pages/[username]",
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
			username: "leedavidcs"
		}
	}
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
Standard.parameters = {
	...Template.parameters,
	urql: (op) => {
		switch (getOperationName(op.query)) {
			case "GetPosts":
				return { data: GetPosts_mock };
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
			case "GetPosts":
				await PromiseUtils.wait(ms("5s"));

				return { data: GetPosts_mock };
			case "GetUserInfoSideBar":
				return { data: GetUserInfoSideBar_mock };
			default:
				return {};
		}
	}
};
