import {
	CreatePost_mock,
	GetPostDraft_mock,
	GetUserInfoSideBar_mock
} from "@/client/graphql/mocks";
import { UserPageLayout, UserPageLayoutProps } from "@/client/organisms";
import { PromiseUtils } from "@/utils";
import type { Meta, Story } from "@storybook/react";
import ms from "ms";
import React from "react";
import { getOperationName } from "urql";

export default {
	title: "organisms/UserPageLayout",
	component: UserPageLayout
} as Meta;

const Template: Story<UserPageLayoutProps> = (args) => {
	return <UserPageLayout {...args} />;
};
Template.args = {
	selectedTab: "posts",
	userName: "leedavidcs"
};
Template.parameters = {
	layout: "fullscreen"
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
