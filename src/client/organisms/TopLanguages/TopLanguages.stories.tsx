import { useGetUserInfoSideBarQuery } from "@/client/graphql";
import { GetUserInfoSideBar_mock } from "@/client/graphql/mocks";
import { TopLanguages } from "@/client/organisms";
import React from "react";
import { getOperationName } from "urql";

export default {
	title: "organisms/TopLanguages",
	component: TopLanguages
};

const Template = (args) => {
	const [{ data }] = useGetUserInfoSideBarQuery({
		variables: {
			name: "leedavidcs"
		}
	});

	const topLanguages = data?.user?.github.topLanguages;

	return <TopLanguages {...args} style={{ width: 296 }} topLanguages={topLanguages} />;
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
