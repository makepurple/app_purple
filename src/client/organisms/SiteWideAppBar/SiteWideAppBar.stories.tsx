import { SiteWideAppBar } from "@/client/organisms";
import React from "react";

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

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
