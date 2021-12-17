import { SiteWideLayout, SiteWideLayoutProps } from "@makepurple/www";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/SiteWideLayout",
	component: SiteWideLayout
} as Meta;

const Template: Story<SiteWideLayoutProps> = (args) => {
	return <SiteWideLayout {...args} />;
};
Template.args = {};

export const Standard: any = Template.bind({});
Standard.args = { ...Template.args };
Standard.parameters = {
	layout: "fullscreen",
	urql: () => ({})
};
