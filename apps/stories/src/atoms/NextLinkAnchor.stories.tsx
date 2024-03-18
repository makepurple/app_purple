import { NextLinkAnchor, NextLinkAnchorProps } from "@makepurple/components";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "atoms/NextLinkAnchor",
	component: NextLinkAnchor
} as Meta;

const Template: Story<NextLink legacyBehaviorAnchorProps> = (args) => {
	return <NextLink legacyBehaviorAnchor {...args} />;
};
Template.args = {
	children: "google",
	href: "https://google.com"
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
