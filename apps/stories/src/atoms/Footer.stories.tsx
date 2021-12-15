import { Footer } from "@makepurple/components";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "atoms/Footer",
	component: Footer
} as Meta;

const Template: Story = (args) => (
	<>
		<div style={{ height: "100vh" }} />
		<Footer {...args} />
	</>
);
Template.args = {};

export const Standard: any = Template.bind({});
Standard.args = { ...Template.args };
Standard.parameters = {
	layout: "fullscreen"
};
