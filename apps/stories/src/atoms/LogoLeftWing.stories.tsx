import { LogoLeftWing, LogoLeftWingProps } from "@makepurple/components";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "atoms/LogoLeftWing",
	component: LogoLeftWing
} as Meta;

const Template: Story<LogoLeftWingProps> = (args) => {
	return <LogoLeftWing {...args} />;
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
