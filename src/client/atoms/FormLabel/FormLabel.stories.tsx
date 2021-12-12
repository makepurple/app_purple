import { FormGroup, FormLabel, FormLabelProps, Input } from "@/client/atoms";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "atoms/FormLabel",
	component: FormLabel
} as Meta;

const Template: Story<FormLabelProps> = (args) => {
	return (
		<FormGroup>
			<FormLabel {...args} />
			<Input />
		</FormGroup>
	);
};
Template.args = {
	children: "First name"
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
