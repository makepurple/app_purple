import { PromiseUtils } from "@makepurple/utils";
import { SiteWideLayout } from "@makepurple/www";
import {
	GetCommentReplies_mock,
	GetPostComments_mock,
	GetPostDraft_mock,
	GetPost_mock,
	GetUserInfoSideBar_mock
} from "@makepurple/www/src/graphql/mocks";
import { PageProps } from "@makepurple/www/src/page-props/[userName]/[postTitle]";
import { Page } from "@makepurple/www/src/pages/[userName]/[postTitle]";
import { action } from "@storybook/addon-actions";
import type { Meta, Story } from "@storybook/react";
import ms from "ms";
import React from "react";
import { getOperationName, Operation } from "urql";

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
			postTitle: "not-a-real-blog-post-title",
			userName: "leedavidcs"
		}
	}
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
Standard.parameters = {
	...Template.parameters,
	urql: async (op: Operation) => {
		const operationName = getOperationName(op.query);

		operationName && action(operationName)(op.variables);

		switch (operationName) {
			case "GetCommentReplies":
				await PromiseUtils.wait(ms("0.5s"));

				return { data: GetCommentReplies_mock };
			case "GetPost":
				return { data: GetPost_mock };
			case "GetPostComments":
				return { data: GetPostComments_mock };
			case "GetPostDraft":
				return { data: GetPostDraft_mock };
			case "GetUserInfoSideBar":
				return { data: GetUserInfoSideBar_mock };
			default:
				return {};
		}
	}
};
