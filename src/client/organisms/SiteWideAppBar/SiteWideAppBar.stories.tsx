import { GetMyUser_mock } from "@/client/graphql/mocks";
import { SiteWideAppBar } from "@/client/organisms";
import React from "react";
import { getOperationName } from "urql";

export default {
	title: "organisms/SiteWideAppBar",
	component: SiteWideAppBar
};

const Template = (args) => (
	<>
		<SiteWideAppBar {...args} />
		<div style={{ height: "200vh" }} />
	</>
);
Template.args = {};

export const Standard: any = Template.bind({});
Standard.args = { ...Template.args };
Standard.parameters = {
	layout: "fullscreen",
	urql: () => ({})
};

export const LoggedIn: any = Template.bind({});
LoggedIn.args = { ...Template.args };
LoggedIn.parameters = {
	layout: "fullscreen",
	urql: (op) => {
		if (getOperationName(op.query) === "GetMyUser") {
			return { data: GetMyUser_mock };
		}

		return {};
	}
};
