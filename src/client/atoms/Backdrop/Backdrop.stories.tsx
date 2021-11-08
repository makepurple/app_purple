import { Backdrop, HamburgerMenuButton, SideDrawer } from "@/client/atoms";
import type { Meta, Story } from "@storybook/react";
import React from "react";
import { useDialogState } from "reakit";

export default {
	title: "atoms/Backdrop",
	component: Backdrop
} as Meta;

const Template: Story = (args) => {
	const dialog = useDialogState({ animated: true });

	return (
		<>
			<HamburgerMenuButton {...dialog} />
			<Backdrop {...dialog} {...args}>
				<SideDrawer {...dialog} />
			</Backdrop>
		</>
	);
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
