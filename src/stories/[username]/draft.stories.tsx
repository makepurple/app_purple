import { SiteWideLayout } from "@/client/organisms";
import Page from "@/pages/[username]/draft";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "pages/[username]/draft",
	component: Page,
	decorators: [
		(Story) => (
			<SiteWideLayout>
				<Story />
			</SiteWideLayout>
		)
	]
} as Meta;

const Template: Story = (args) => {
	return <Page {...args} />;
};
Template.args = {};
Template.parameters = {
	layout: "fullscreen",
	nextRouter: {
		query: {
			username: "leedavidcs"
		}
	}
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
Standard.parameters = { ...Template.parameters };
