import { LogoRightWing, LogoRightWingProps } from "@makepurple/components";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "atoms/LogoRightWing",
	component: LogoRightWing
} as Meta;

const Template: Story<LogoRightWingProps> = (args) => {
	return <LogoRightWing {...args} />;
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
