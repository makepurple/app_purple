import { useGetUserSummarySidebarQuery } from "@/client/graphql";
import { GetUserSummarySidebar_mock } from "@/client/graphql/mocks";
import { UserTopLanguages } from "@/client/organisms";
import React from "react";
import { getOperationName } from "urql";

export default {
	title: "organisms/UserTopLanguages",
	component: UserTopLanguages,
	decorators: [(Story) => <Story />]
};

const Template = (args) => {
	const [{ data }] = useGetUserSummarySidebarQuery({
		variables: {
			name: "leedavidcs"
		}
	});

	const topLanguages = data?.user?.github.topLanguages;

	return (
		<UserTopLanguages
			{...args}
			style={{ width: 296 }}
			topLanguages={topLanguages?.nodes ?? []}
			totalSize={topLanguages?.totalSize ?? 0}
		/>
	);
};
Template.args = {};

export const Standard: any = Template.bind({});
Standard.args = { ...Template.args };
Standard.parameters = {
	urql: (op) => {
		if (getOperationName(op.query) === "GetUserSummarySidebar") {
			return { data: GetUserSummarySidebar_mock };
		}

		return {};
	}
};
