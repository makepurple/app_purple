import { SiteWideLayout } from "@/client/organisms";
import { Page } from "@/pages";
import React from "react";

export default {
	title: "pages/index",
	component: Page,
	decorators: [
		(Story) => (
			<SiteWideLayout>
				<Story />
			</SiteWideLayout>
		)
	]
};

const Template = (args) => {
	return <Page {...args} />;
};
Template.args = {};

export const Standard: any = Template.bind({});
Standard.args = { ...Template.args };
Standard.parameters = {
	layout: "fullscreen",
	urql: () => ({})
};
