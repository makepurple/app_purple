import { Skeleton } from "@makepurple/components";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "atoms/Skeleton",
	component: Skeleton
} as Meta;

const Template: Story = () => {
	return <Skeleton style={{ height: 300, width: 300 }} />;
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
