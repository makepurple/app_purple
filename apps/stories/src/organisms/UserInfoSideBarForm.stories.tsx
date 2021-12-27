import { PromiseUtils } from "@makepurple/utils";
import { UserInfoSideBarForm, UserInfoSideBarFormProps } from "@makepurple/www";
import {
	GetUserInfoSideBar_mock,
	SuggestSkills_mock,
	UpdateUserInfo_mock
} from "@makepurple/www/src/graphql/mocks";
import type { Meta, Story } from "@storybook/react";
import { getOperationName } from "@urql/core";
import ms from "ms";
import React from "react";

export default {
	title: "organisms/UserInfoSideBarForm",
	component: UserInfoSideBarForm
} as Meta;

const Template: Story<UserInfoSideBarFormProps> = (args) => {
	return <UserInfoSideBarForm {...args} userName="leedavidcs" />;
};
Template.args = {};
Template.parameters = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
Standard.parameters = {
	...Template.parameters,
	urql: async (op: any) => {
		switch (getOperationName(op.query)) {
			case "SuggestSkills":
				await PromiseUtils.wait(ms("1s"));

				return { data: SuggestSkills_mock };
			case "GetUserInfoSideBar":
				return { data: GetUserInfoSideBar_mock };
			case "UpdateUserInfo":
				await PromiseUtils.wait(ms("1s"));

				return { data: UpdateUserInfo_mock };
			default:
				return {};
		}
	}
};
