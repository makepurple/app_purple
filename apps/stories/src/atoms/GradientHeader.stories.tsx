import { GradientHeader, GradientHeaderProps } from "@makepurple/components";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "atoms/GradientHeader",
	component: GradientHeader
} as Meta;

const Template: Story<GradientHeaderProps> = (args) => {
	return (
		<div style={{ position: "relative", height: "100vh" }}>
			<GradientHeader {...args} />
		</div>
	);
};
Template.args = {};

export const Standard: any = Template.bind({});
Standard.args = { ...Template.args };
Standard.parameters = {
	layout: "fullscreen"
};
