import { Anchor } from "@makepurple/components";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "atoms/Anchor",
	component: Anchor
} as Meta;

const Template: Story = (args) => <Anchor {...args} />;
Template.args = {
	children: "google",
	href: "https://google.com"
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
