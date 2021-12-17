import { SiteWideAppBar, SiteWideAppBarProps } from "@makepurple/www";
import { GetMyUser_mock } from "@makepurple/www/src/graphql/mocks";
import type { Meta, Story } from "@storybook/react";
import React from "react";
import { getOperationName } from "urql";

export default {
	title: "organisms/SiteWideAppBar",
	component: SiteWideAppBar
} as Meta;

const Template: Story<SiteWideAppBarProps> = (args) => (
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
	urql: (op: any) => {
		if (getOperationName(op.query) === "GetMyUser") {
			return { data: GetMyUser_mock };
		}

		return {};
	}
};
