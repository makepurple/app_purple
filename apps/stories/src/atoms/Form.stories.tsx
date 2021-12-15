import { Form, FormButton, Input } from "@makepurple/components";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "atoms/Form",
	component: Form
} as Meta;

const Template: Story = (args) => {
	return (
		<Form disabled={args.disabled}>
			<Input placeholder="name" />
			<Input placeholder="email" tw="mt-4" />
			<FormButton tw="mt-4" type="submit">
				Submit
			</FormButton>
		</Form>
	);
};
Template.args = {
	disabled: false
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
