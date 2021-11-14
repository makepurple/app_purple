import { GetUserInfoSideBar_mock } from "@/client/graphql/mocks";
import { UserInfoSideBarForm, UserInfoSideBarFormProps } from "@/client/organisms";
import type { Meta, Story } from "@storybook/react";
import { getOperationName } from "@urql/core";
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
	urql: (op) => {
		switch (getOperationName(op.query)) {
			case "GetUserInfoSideBar":
				return { data: GetUserInfoSideBar_mock };
			default:
				return {};
		}
	}
};
