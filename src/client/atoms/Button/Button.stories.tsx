import { Button, ButtonProps } from "@/client/atoms";
import { action } from "@storybook/addon-actions";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "atoms/Button",
	component: Button
} as Meta;

const Template: Story<ButtonProps> = (args) => {
	return <Button {...args} onClick={action("onClick")} />;
};
Template.args = {
	children: "Click me!",
	disabled: false,
	size: "medium",
	variant: "primary"
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
