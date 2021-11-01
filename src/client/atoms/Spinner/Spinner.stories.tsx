import { Spinner } from "@/client/atoms";
import type { SvgIconComponentProps } from "@/client/svgs";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "atoms/Spinner",
	component: Spinner
} as Meta;

const Template: Story<SvgIconComponentProps> = (args) => {
	return <Spinner {...args} />;
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
