import { MaybeAnchor } from "@makepurple/components";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "atoms/MaybeAnchor",
	component: MaybeAnchor
} as Meta;

const Template: Story = (args) => <MaybeAnchor {...args} />;
Template.args = {
	children: "google",
	href: "https://google.com"
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
