import { HamburgerMenuButton, SideDrawer } from "@/client/atoms";
import type { Meta, Story } from "@storybook/react";
import React from "react";
import { useDialogState } from "reakit";

export default {
	title: "atoms/SideDrawer",
	component: SideDrawer
} as Meta;

const Template: Story = (args) => {
	const dialog = useDialogState({ animated: true });

	return (
		<>
			<HamburgerMenuButton {...dialog} />
			<SideDrawer {...dialog} {...args} />
		</>
	);
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
