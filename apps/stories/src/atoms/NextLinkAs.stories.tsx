import { NextLinkAs, NextLinkAsProps } from "@makepurple/components";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "atoms/NextLinkAs",
	component: NextLinkAs
} as Meta;

const Template: Story<NextLinkAsProps<"a">> = (args) => {
	return <NextLinkAs {...args}>link</NextLinkAs>;
};
Template.args = {
	as: "a",
	href: "/story"
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
