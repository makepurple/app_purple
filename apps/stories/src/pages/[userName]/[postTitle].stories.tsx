import { GetPostDraft_mock, GetUserInfoSideBar_mock } from "@makepurple/www/src/graphql/mocks";
import { Page } from "@makepurple/www/src/pages/[userName]/[postTitle]";
import type { Meta, Story } from "@storybook/react";
import React from "react";
import { getOperationName } from "urql";

export default {
	title: "pages/[userName]/[postTitle]",
	component: Page
} as Meta;

const Template: Story = (args) => {
	return <Page {...args} />;
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
Standard.parameters = {
	urql: (op: any) => {
		switch (getOperationName(op.query)) {
			case "GetPostDraft":
				return { data: GetPostDraft_mock };
			case "GetUserInfoSideBar":
				return { data: GetUserInfoSideBar_mock };
			default:
				return {};
		}
	}
};
