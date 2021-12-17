import { PromiseUtils } from "@makepurple/utils";
import { UserInfoSideBar, UserInfoSideBarProps } from "@makepurple/www";
import {
	CreatePost_mock,
	GetPostDraft_mock,
	GetUserInfoSideBar_mock
} from "@makepurple/www/src/graphql/mocks";
import type { Meta, Story } from "@storybook/react";
import { getOperationName } from "@urql/core";
import ms from "ms";
import React from "react";

export default {
	title: "organisms/UserInfoSideBar",
	component: UserInfoSideBar
} as Meta;

const Template: Story<UserInfoSideBarProps> = (args) => {
	return <UserInfoSideBar {...args} userName="leedavidcs" />;
};
Template.args = {};
Template.parameters = {};

export const Standard: any = Template.bind({});
Standard.args = { ...Template.args };
Standard.parameters = {
	...Template.parameters,
	urql: async (op: any) => {
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
