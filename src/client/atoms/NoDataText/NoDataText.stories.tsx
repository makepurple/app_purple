import { NoDataText } from "@/client/atoms";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "atoms/NoDataText",
	component: NoDataText
} as Meta;

const Template: Story = (args) => {
	return <NoDataText>{args.children}</NoDataText>;
};
Template.args = {
	children: "This user has not added any data"
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
