import { SiteWideLayout } from "@makepurple/www";
import { Page } from "@makepurple/www/src/pages";
import type { Meta, Story } from "@storybook/react";
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
} as Meta;

const Template: Story = (args) => {
	return <Page {...args} />;
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
Standard.parameters = {
	layout: "fullscreen",
	urql: () => ({})
};
