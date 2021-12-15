import { FormHelperText } from "@makepurple/components";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "atoms/FormHelperText",
	component: FormHelperText
} as Meta;

const Template: Story = (args) => {
	return <FormHelperText {...args} />;
};
Template.args = {
	children: "Some important helper text",
	error: null
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
