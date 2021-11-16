import {
	GetUserInfoSideBar_mock,
	SuggestSkills_mock,
	UpdateUserSkills_mock
} from "@/client/graphql/mocks";
import { UserInfoSideBarForm, UserInfoSideBarFormProps } from "@/client/organisms";
import { PromiseUtils } from "@/utils";
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

export const Standard: any = Template.bind({});
Standard.args = { ...Template.args };
Standard.parameters = {
	...Template.parameters,
	urql: async (op) => {
		switch (getOperationName(op.query)) {
			case "SuggestSkills":
				await PromiseUtils.wait(ms("1s"));

				return { data: SuggestSkills_mock };
			case "GetUserInfoSideBar":
				return { data: GetUserInfoSideBar_mock };
			case "UpdateUserSkills":
				await PromiseUtils.wait(ms("1s"));

				return { data: UpdateUserSkills_mock };
			default:
				return {};
		}
	}
};
