import { FormGroup, FormGroupProps, FormHelperText, Input } from "@makepurple/components";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "atoms/FormGroup",
	component: FormGroup
} as Meta;

const Template: Story<FormGroupProps> = (args) => {
	return (
		<FormGroup {...args}>
			<Input placeholder="Placeholder..." />
			<FormHelperText>Some important helper text</FormHelperText>
		</FormGroup>
	);
};
Template.args = {
	error: false
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
