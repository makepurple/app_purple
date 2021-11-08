import { HamburgerMenuButton } from "@/client/atoms/HamburgerMenuButton";
import type { Meta, Story } from "@storybook/react";
import React from "react";
import { useDialogState } from "reakit";

export default {
	title: "atoms/HamburgerMenuButton",
	component: HamburgerMenuButton
} as Meta;

const Template: Story = (args) => {
	const dialog = useDialogState();

	return <HamburgerMenuButton {...dialog} {...args} />;
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
