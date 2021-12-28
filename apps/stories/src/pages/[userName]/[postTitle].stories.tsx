import { SiteWideLayout } from "@makepurple/www";
import {
	GetPostDraft_mock,
	GetPost_mock,
	GetUserInfoSideBar_mock
} from "@makepurple/www/src/graphql/mocks";
import { PageProps } from "@makepurple/www/src/page-props/[userName]/[postTitle]";
import { Page } from "@makepurple/www/src/pages/[userName]/[postTitle]";
import type { Meta, Story } from "@storybook/react";
import React from "react";
import { getOperationName } from "urql";

export default {
	title: "pages/[userName]/[postTitle]",
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
	urql: (op: any) => {
		switch (getOperationName(op.query)) {
			case "GetPost":
				return { data: GetPost_mock };
			case "GetPostDraft":
				return { data: GetPostDraft_mock };
			case "GetUserInfoSideBar":
				return { data: GetUserInfoSideBar_mock };
			default:
				return {};
		}
	}
};