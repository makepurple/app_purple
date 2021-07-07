import { SiteWideLayout } from "@/client/organisms";
import React from "react";

export default {
	title: "organisms/SiteWideLayout",
	component: SiteWideLayout
};

const Template = (args) => {
	return <SiteWideLayout {...args} />;
};
Template.args = {};

export const Standard: any = Template.bind({});
Standard.args = { ...Template.args };
Standard.parameters = {
	layout: "fullscreen",
	urql: () => ({})
};
