import { SiteWideFooter, SiteWideFooterProps } from "@makepurple/www";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/SiteWideFooter",
	component: SiteWideFooter
} as Meta;

const Template: Story<SiteWideFooterProps> = (args) => (
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
