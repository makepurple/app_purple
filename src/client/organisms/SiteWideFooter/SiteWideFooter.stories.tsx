import { SiteWideFooter } from "@/client/organisms";
import React from "react";

export default {
	title: "organisms/SiteWideFooter",
	component: SiteWideFooter
};

const Template = (args) => (
	<div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
		<div style={{ flexGrow: 1 }} />
		<SiteWideFooter {...args} />
	</div>
);
Template.args = {};

export const Standard: any = Template.bind({});
Standard.args = { ...Template.args };
Standard.parameters = {
	layout: "fullscreen"
};
