import { useGetUserInfoSideBarQuery } from "@/client/graphql";
import { GetUserInfoSideBar_mock } from "@/client/graphql/mocks";
import { UserInfoSideBar } from "@/client/organisms";
import React from "react";
import { getOperationName } from "urql";

export default {
	title: "organisms/UserInfoSideBar",
	component: UserInfoSideBar
};

const Template = (args) => {
	const [{ data }] = useGetUserInfoSideBarQuery({
		variables: {
			name: "leedavidcs"
		}
	});

	const user = data?.user;

	if (!user) return null;

	return <UserInfoSideBar {...args} user={user} />;
};
Template.args = {};

export const Standard: any = Template.bind({});
Standard.args = { ...Template.args };
Standard.parameters = {
	urql: (op) => {
		if (getOperationName(op.query) === "GetUserInfoSideBar") {
			return { data: GetUserInfoSideBar_mock };
		}

		return {};
	}
};
